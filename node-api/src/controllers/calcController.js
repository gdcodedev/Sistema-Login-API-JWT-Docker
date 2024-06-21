exports.calculate = (req, res) => {
    const { value1, value2, operation } = req.body;
    let result;

    switch (operation) {
        case 'sum':
            result = value1 + value2;
            break;
        case 'subtract':
            result = value1 - value2;
            break;
        case 'multiply':
            result = value1 * value2;
            break;
        case 'divide':
            if (value2 === 0) {
                return res.status(400).json({ message: 'Cannot divide by zero' });
            }
            result = value1 / value2;
            break;
        default:
            return res.status(400).json({ message: 'Invalid operation' });
    }

    res.json({ result });
};
