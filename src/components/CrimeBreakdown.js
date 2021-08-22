import {PieChart, Pie, Cell, Legend} from 'recharts'

export const CrimeBreakdown = (props) => {
    
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'cyan', 'green'];
    
    return (
        <div>
        {props.data &&
        <PieChart width={400} height={400}>
            <Pie
                data={props.data}
                cx={200}
                cy={140}
                labelLine={false}
                outerRadius={140}
                fill="#8884d8"
                dataKey="value"
            >
                {
                    props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
            <Legend verticalAlign="bottom" />
        </PieChart>
        }
        </div>
    );
}