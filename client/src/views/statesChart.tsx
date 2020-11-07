
import React, { useEffect, useState } from 'react'
import { Pie} from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { AnswerState } from '../store/answersReducer'

export const StatesChart: React.FC = () => {
  
    const [state, setState] = useState<string>('all')
    const answers = useSelector((state: AnswerState) => state.answers)
    const states = useSelector((state: AnswerState) => state.states)

    const options = {
      //  responsive: true,
      //  maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

    const parseData = () => {
        const answersMap = new Map<string, number>()
        let totalNumberHere = 0
        if (state == 'all') {
            answers.map(item => {
                totalNumberHere++;
                if (answersMap.has(item.platform)) {
                    let counter = answersMap.get(item.platform);
                    if (counter) {
                        counter++;
                        answersMap.set(item.platform, counter)
                    }
                } else {
                    answersMap.set(item.platform, 1);
                }
            })
        }
        
        let counters = Array.from(answersMap.values());
        counters = counters.map(item=>(Math.round((item/totalNumberHere)*100)))
        console.log(counters)
        let labels = Array.from(answersMap.keys())
        labels = labels.map((item,idx)=>(
            `${item} ${counters[idx]}%`
         ))
         let colors = Array<string>()
        for(let i=0;i<counters.length;i++){
            colors.push(`rgb(
                ${Math.floor(Math.random() * Math.floor(255))}
                ,${Math.floor(Math.random() * Math.floor(255))}
                ,${Math.floor(Math.random() * Math.floor(255))})`)
        }
       return{
            labels,
            datasets:[{
                data:counters,
                backgroundColor:colors,
                borderWidth: 1
            }]
        }

    }

    return <Pie data={parseData()} options={options}/>
}