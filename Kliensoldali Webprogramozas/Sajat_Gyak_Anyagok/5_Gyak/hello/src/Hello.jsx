import'./Hello.css';
import cn from 'classnames';

function Hello() {
    const name = 'Bence';
    let count = 5;


    if (name === '') {
        return (<>
         <h1>Szopatva!</h1>
         </>);
    } else {
        [...Array(count)].map((e, i) => {return(<><h1 className={cn({'orange':true})} key = {i}>Hello {name}!</h1></>)});
    }
}

export default Hello;