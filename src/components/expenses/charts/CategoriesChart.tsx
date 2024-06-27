'use client'
import {PieChart, Pie, Cell, Tooltip} from 'recharts';
import {TotalAmountByCategory} from "@/lib/interfaces/expense";
import useSize from "@/lib/hooks/useSize";

interface Props {
    data: TotalAmountByCategory[],
}

const BREAKPOINT = 756;


export default function CategoriesChart({ data }: Props) {
    const windowSize = useSize();
    return (
            <PieChart width={500} height={450}>
                <Pie
                    data={data}
                    innerRadius={windowSize[0] < BREAKPOINT ? 90 : 140}
                    outerRadius={windowSize[0] < BREAKPOINT ? 120 : 180}
                    cx={windowSize[0] < BREAKPOINT ? 145 : 250}
                    cy={windowSize[0] < BREAKPOINT ? 170 : 230}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color}  />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
    );
}
