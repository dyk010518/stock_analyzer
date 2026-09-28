import { useId, useState } from 'react';

const cases = [
  { name: 'Bear', color: '#e2b2ac', dash: '5 4' },
  { name: 'Base', color: '#b6efd0' },
  { name: 'Bull', color: '#bcb6e9', dash: '2 4' },
];
const models = [
  { key: 'earningsVals', label: 'Earnings' },
  { key: 'fcfVals', label: 'Cash flow' },
];
const money = value => Number.isFinite(value)
  ? value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
  : '—';
const axisMoney = value => value.toLocaleString('en-US', {
  style: 'currency', currency: 'USD', notation: 'compact', maximumFractionDigits: 1,
});
const numericValue = value => value !== '-' && value !== '' && value != null && Number.isFinite(Number(value))
  ? Number(value) : null;

export default function ScenarioChart({ projections }) {
  const [model, setModel] = useState('earningsVals');
  const [activeIndex, setActiveIndex] = useState(projections.length - 1);
  const gradientId = `scenario-fill-${useId().replace(/:/g, '')}`;
  const series = cases.map((scenario, index) => ({
    ...scenario,
    values: projections.map(point => numericValue(point[model][index])),
  }));
  const available = series.filter(scenario => scenario.values.every(Number.isFinite));
  const values = available.flatMap(scenario => scenario.values);
  const lower = Math.min(0, ...values);
  const upper = Math.max(0, ...values);
  const range = upper - lower || 1;
  const min = lower < 0 ? lower - range * 0.1 : 0;
  const max = upper > 0 ? upper + range * 0.1 : lower < 0 ? 0 : 1;
  const canPlot = available.length > 0 && Number.isFinite(min) && Number.isFinite(max)
    && Number.isFinite(max - min);
  const left = 104;
  const right = 604;
  const top = 16;
  const bottom = 228;
  const x = index => left + index / Math.max(1, projections.length - 1) * (right - left);
  const y = value => bottom - (value - min) / (max - min) * (bottom - top);
  const pathFor = scenario => scenario.values.map((value, index) =>
    `${index ? 'L' : 'M'}${x(index)},${y(value)}`
  ).join(' ');
  const base = available.find(scenario => scenario.name === 'Base');
  const pointLabel = `Year ${projections[activeIndex].year}`;
  const readout = series.map(scenario => `${scenario.name}: ${money(scenario.values[activeIndex])}`).join(', ');

  const selectPoint = event => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const position = (event.clientX - bounds.left) / bounds.width * 640;
    setActiveIndex(Math.max(0, Math.min(projections.length - 1,
      Math.round((position - left) / (right - left) * (projections.length - 1))
    )));
  };

  return (
    <section className="scenario-chart" aria-labelledby="scenario-chart-heading">
      <div className="scenario-chart-header">
        <h3 id="scenario-chart-heading">Valuation by horizon</h3>
        <div className="chart-model-switch" role="group" aria-label="Valuation model">
          {models.map(item => (
            <button key={item.key} aria-pressed={model === item.key} onClick={() => setModel(item.key)}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {canPlot ? (
        <>
          <div className="scenario-plot" role="slider" tabIndex={0}
            aria-label="Explore valuation by year" aria-valuemin={1} aria-valuemax={projections.length}
            aria-valuenow={activeIndex + 1} aria-valuetext={`${pointLabel}. ${readout}`}
            onPointerMove={selectPoint} onPointerDown={selectPoint}
            onPointerLeave={() => setActiveIndex(projections.length - 1)}
            onKeyDown={event => {
              if (['ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
                event.preventDefault();
                setActiveIndex(current => event.key === 'Home' ? 0
                  : event.key === 'End' ? projections.length - 1
                    : Math.max(0, Math.min(projections.length - 1,
                      current + (event.key === 'ArrowRight' || event.key === 'ArrowUp' ? 1 : -1)
                    )));
              }
            }}>
            <svg viewBox="0 0 640 262" aria-hidden="true">
              <defs>
                <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#b6efd0" stopOpacity=".12" />
                  <stop offset="100%" stopColor="#b6efd0" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 1, 2, 3].map(index => {
                const value = min + (max - min) * index / 3;
                return <g key={index}>
                  <line className="chart-grid-line" x1={left} x2={right} y1={y(value)} y2={y(value)} />
                  <text className="chart-axis-label" textAnchor="end" x={left - 14} y={y(value) + 4}>{axisMoney(value)}</text>
                </g>;
              })}
              {base && <path d={`${pathFor(base)} L${right},${y(0)} L${left},${y(0)} Z`} fill={`url(#${gradientId})`} />}
              {min < 0 && max > 0 && <line className="chart-zero-line" x1={left} x2={right} y1={y(0)} y2={y(0)} />}
              {available.map(scenario => (
                <path key={scenario.name} className="scenario-path" d={pathFor(scenario)}
                  fill="none" stroke={scenario.color} strokeWidth={scenario.name === 'Base' ? 2.5 : 2}
                  strokeDasharray={scenario.dash} />
              ))}
              <line className="chart-cursor" x1={x(activeIndex)} x2={x(activeIndex)} y1={top} y2={bottom} />
              {available.map(scenario => (
                <g key={scenario.name}>
                  <circle cx={x(activeIndex)} cy={y(scenario.values[activeIndex])} r="7" fill={scenario.color} opacity=".1" />
                  <circle cx={x(activeIndex)} cy={y(scenario.values[activeIndex])} r="3" fill={scenario.color} />
                </g>
              ))}
              {projections.map((point, index) => (
                <text key={point.year} className={`chart-axis-label ${index === activeIndex ? 'active' : ''}`}
                  x={x(index)} y="253" textAnchor="middle">Year {point.year}</text>
              ))}
            </svg>
          </div>
          <div className="chart-readout" aria-label={`${pointLabel} valuations`}>
            {series.map(scenario => (
              <div key={scenario.name} style={{ '--case-color': scenario.color }}>
                <span><i aria-hidden="true" />{scenario.name}</span>
                <output>{money(scenario.values[activeIndex])}</output>
              </div>
            ))}
          </div>
          <p className="chart-caption">{pointLabel} · Present value per share, discounted to today.</p>
        </>
      ) : <p className="chart-unavailable">Not enough financial data to plot these scenarios.</p>}
    </section>
  );
}
