
import './PanigationStyle.scss'


const PanigationButton = ({items, pageNum, handlerChangePage}) =>{

    //console.log("panigation" + pageNum);
    const hanldNextClick = (e) =>{
        const activeIdx = document.querySelector('.active-btn').textContent
        //trang cuoi
         if(+activeIdx === items){
            handlerChangePage(0)
         }
         else{
            handlerChangePage(+activeIdx)
         }
 
     }
     const hanldPreClick = () =>{
        const activeIdx = document.querySelector('.active-btn').textContent
        //trang cuoi
         if(+activeIdx === 1){
            handlerChangePage(items-1)
         }
         else{
            handlerChangePage(+activeIdx - 2)
         }
     }
     const changePage = (idx) =>{
        handlerChangePage(idx)
     }


     const ButtonGroup = () =>{
        const newArr = Array.from( {length: items}, (val, idx) =>{
           return (
            <button className={`page-btn ${idx === pageNum-1 ? 'active-btn' : null}`}
            onClick={() => changePage(idx)}
        
             >{idx+1}</button>
           )
        } )
        return newArr
     }
    return (
        <div className="pavigation">
            <button className="pre-btn"
                    onClick={(e) => hanldPreClick(e)}
            >prev</button>
            {/* {
                items.forEach( (val, idx)=>{
                    return <button className={`page-btn ${idx === pageNum ? 'active-btn' : null}`}
                                onClick={() => changePage(idx)}
                            
                            >{idx+1}</button>
                })
            } */}
            
            <ButtonGroup />

            <button className="next-btn"
                   onClick={(e) => hanldNextClick(e)}
            >next</button>
    </div>
    )
}

export default PanigationButton