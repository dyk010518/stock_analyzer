import ScenarioChart from './ScenarioChart';

const formatValue = value => value !== '-' && Number.isFinite(Number(value))
  ? Number(value).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
  : '—';

export default function AnalysisResult({ earningVals, fcfVals, projections }) {
  return (
    <section className="results-section enter" aria-labelledby="results-heading">
      <h2 id="results-heading">Estimated fair value</h2>
      <div className="results-table-container">
        <table className="results-table">
          <caption className="sr-only">Estimated value per share in USD</caption>
          <thead><tr><th scope="col">Per share</th>{['Bear', 'Base', 'Bull'].map((name, index) => <th scope="col" className={`scenario-${index}`} key={name}>{name}</th>)}</tr></thead>
          <tbody>
            <tr><th scope="row">Earnings</th>{earningVals.map((value, index) => <td key={index}>{formatValue(value)}</td>)}</tr>
            <tr><th scope="row">Cash flow</th>{fcfVals.map((value, index) => <td key={index}>{formatValue(value)}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <ScenarioChart key={projections.length} projections={projections} />
    </section>
  );
}
