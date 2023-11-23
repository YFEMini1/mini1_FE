import DetailModal from '../../components/template/detail/detailModal';
import { useState } from 'react';

const Detail = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const handleDetailModal = () => {
    setShowDetailModal(true);
  };

  return (
    <div>
      Detail
      <button onClick={handleDetailModal}>상세보기</button>
      {showDetailModal && <DetailModal setShowModal={setShowDetailModal} />}
    </div>
  );
};

export default Detail;
