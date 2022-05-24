import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const useServiceDetail = (serviceID) => {

    const { data: service, isLoading, refetch } = useQuery('available', () => fetch(`http://localhost:5000/service/${serviceID}`)
        .then(res => res.json()))

        if(isLoading){
            return <Loading></Loading>
        }

return [service,refetch];
}


export default useServiceDetail;