import { PieChart, Pie, Cell, Legend } from 'recharts'

/*
This component wraps the recharts pie chart component to display a crime types breakdown 
*/
export const CrimeBreakdown = (props) => {
    const COLORS = ['coral', 'blue', 'orange', 'lime', 'pink', 'gray', 'red', 'goldenrod', 'forestgreen', 'khaki', 'yellow', 'cyan', 'olive', 'red'];

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