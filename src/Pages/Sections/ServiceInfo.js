import { useParams } from 'react-router-dom';
import ServiceInffo from './ServiceInffo';

function ServiceInfo() {
  const { category } = useParams();
  return (
    <div className="App overflow-hidden bg-[#fcfcff]">
      <ServiceInffo  category={category} />
    </div>
  );
}

export default ServiceInfo;
