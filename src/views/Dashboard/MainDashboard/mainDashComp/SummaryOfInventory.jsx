import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
    {name: "Apple", Stock: 12, Sold: 37},
    {name: "Pineapple", Stock: 12, Sold: 37},
    {name: "Melon", Stock: 12, Sold: 37},
    {name: "Watermelon", Stock: 12, Sold: 37},
    {name: "Coconut", Stock: 12, Sold: 37},
    {name: "Milk", Stock: 12, Sold: 37},
]
const summInventory = ()=>{
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Stock" fill="#8884d8" />
                <Bar dataKey="Sold" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default summInventory;