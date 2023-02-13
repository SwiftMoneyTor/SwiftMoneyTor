import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Sales = () => {
    const data = [
        { name: "Apple", Stock: 12, Sold: 54 },
        { name: "Pineapple", Stock: 32, Sold: 56 },
        { name: "Melon", Stock: 13, Sold: 37 },
        { name: "Watermelon", Stock: 25, Sold: 55 },
        { name: "Coconut", Stock: 11, Sold: 43 },
        { name: "Milk", Stock: 32, Sold: 31 }
    ]
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <Line type="monotone" dataKey="Stock" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="Sold" stroke="#82ca9d" strokeWidth={5} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Sales;