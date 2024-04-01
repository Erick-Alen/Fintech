import { useDataContext } from '../app/contexts/DataContext'
import { DateRange } from './DateRange'

type HeaderProps = {

}

export const Header = ({ }: HeaderProps) => {
  const { data, error, loading } = useDataContext()
  // console.log(data)
  return <div><DateRange/></div>
}
