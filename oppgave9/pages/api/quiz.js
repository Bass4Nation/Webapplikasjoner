
const quiz = [
    {
        id: '0',
        question: 'Spørsmål 1',
        answers: [
            {
                answere: 'Alternativ 1',
            },
            {
                answere: 'Alternativ 2',
            },
            {
                answere: 'Alternativ 3',
            },
            {
                answere: 'Alternativ 4',
                correct: true,
            },
        ],
    },
    {
        id: '1',
        question: 'Spørsmål 2',
        answers: [
            {
                answere: 'Alternativ 1',
            },
            {
                answere: 'Alternativ 2',
            },
            {
                answere: 'Alternativ 3',
            },
            {
                answere: 'Alternativ 4',
                correct: true,
            },
        ],
    },
]

export default function handler(req, res) {
    res.status(200).json({ success: true, data: quiz })
}