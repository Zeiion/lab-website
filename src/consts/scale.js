//给日期加0
const addDate = (time)=>{
    if (time.toString().length == 1) {
        time = '0' + time.toString();
    }
    return time;
}

//获取最近五个日期（间隔七天）
const getdays = () => {
    let days = [];
    const today = new Date(Date.now());
    for(let i = 0; i < 5; i++){	
        let dateItem=new Date( today.getTime() - i * 60 * 60 * 1000 * 7 * 24);
        let y = dateItem.getFullYear();	
        let m = dateItem.getMonth() + 1;	
        let d= dateItem.getDate();	
        m = addDate(m);	
        d = addDate(d);	
        // let valueItem= + m + '-' + d;	
        let valueItem= y + '/' + m + '/' + d;	
        valueItem = valueItem.substring(2, valueItem.length)
        days.push(valueItem);	
    }
    return days.reverse();		
}

export const scaleData = ()=>{
    const labels = getdays();
    const list = scale.map((item) => {
        return {
            title: item.title,
            labels: labels,
            datasets: item.datasets,
        };
    });
    return list;
}

export const scale= [
    {
        title: '数据集规模',
        labels: [],  
        datasets: [
            {
                label: '数据集规模',
                data: [91, 98, 104, 110, 121],
                borderColor: 'rgb(126, 34, 206)',
                backgroundColor: 'rgba(126, 34, 206, 0.6)',
                fill: true,
            },
        ]
    },
    {
        title: '模型数量',
        labels: [],  
        datasets: [
            {
                label: '模型数量',
                data: [168, 175, 190, 212, 232],
                borderColor: 'rgb(65, 105, 225)',
                backgroundColor: 'rgba(65, 105, 225, 0.6)',
                fill: true,
            },
        ]
    },
    {
        title: '成果数量',
        labels: [],  
        datasets: [
            {
                label: '成果数量',
                data: [76, 83, 94, 95, 97],
                borderColor: 'rgb(0, 191, 255)',
                backgroundColor: 'rgba(0, 191, 255, 0.6)',
                fill: true,
            },
        ]
    },
    ]