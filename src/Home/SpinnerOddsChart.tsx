import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Spinner } from "../interfaces/Spinner";

interface ItemChance {
    name: string
    data: number[]
}

export default function SpinnerOddsChart({ spinner }: {spinner: Spinner}) {
    const [spinnerOdds, setSpinnerOdds] = useState<ItemChance[]>([]);

    useEffect(() => {
        if (spinner.items) {
            const odds: ItemChance[] = spinner.items.map(item => {
                return {name: item.name, data: [item.chance]} as ItemChance;
            })
            setSpinnerOdds(odds);
        }
    }, [spinner])

    const options: any = {
        chart: {
            type: 'bar',
            stacked: true,
            foreColor: '#fff',
            background: 'transparent',
        },
        theme: {
            mode: 'dark'
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: [''],
            labels: {
                formatter: (val: any) => {
                    return val + "%"
                }
            },
            max: 100
        },
        yaxis: {
            title: {
                text: undefined
            }
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: (val: any) => {
                    return val + "%"
                }
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        noData: {
            text: 'Spinner unavailable.'
        },
        grid: {
            show: false
        }
    }

    return(
        <ReactApexChart height='100%' options={options} type='bar' series={spinnerOdds} />
    )
}