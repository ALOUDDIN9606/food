import { FC } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import Recipies from './Recipies';

const Saved:FC = () => {
    const saved = useSelector((state: RootState) => state.saved.value);
  return (
    <div>
        <Recipies recepies={saved}/>
    </div>
  )
}

export default Saved