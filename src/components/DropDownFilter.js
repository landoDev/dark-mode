import React from 'react'

export const DropDownFilter = ({coinData}) => {
    return(
        <div>
            <form>
                <select>
                    {coinData.map(chart=>{
                        return(
                            <option key ={chart.id} value={chart.name}>{chart.name}</option>
                        ) 
                    })}
                </select>
            </form>
        </div>
    )
}