import {articles} from '../../../data'

export default function handler(req, res) {
    res.status(404).json(articles)
}