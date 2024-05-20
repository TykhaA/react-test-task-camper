import Button from 'components/Button';
import './filters.scss';
import '../../style/input.scss';
import sprite from 'image/icons.svg';

const Filters = ({ handleFilter }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const filterEquipmet = {};
    const filters = [];
    if (e.target.elements.city.value) {
      filterEquipmet.location = e.target.elements.city.value;
    }
    if (e.target.elements.Automatic.checked) {
      filterEquipmet.transmission = 'automatic';
    }
    if (e.target.elements.type.value) {
      filterEquipmet.form = e.target.elements.type.value;
    }
    if (e.target.elements.AC.checked) {
      filters.push('airConditioner');
    }
    if (e.target.elements.Kitchen.checked) {
      filters.push('kitchen');
    }
    if (e.target.elements.TV.checked) {
      filters.push('TV');
    }
    if (e.target.elements.Shower.checked) {
      filters.push('shower');
      filters.push('toilet');
    }
    handleFilter(filterEquipmet, filters);
  };
  return (
    <div className="filters-section">
      <form className="form-filters" onSubmit={handleSubmit}>
        <div className="form-filters__field">
          <label htmlFor="city">Location</label>
          <div className="input-wrapper">
            <input
              className="input input_icon"
              id="city"
              type="text"
              name="city"
              placeholder="city"
            />
            <svg width="18" height="20">
              <use href={sprite + '#icon-location'}></use>
            </svg>
          </div>
        </div>
        <div>
          <div className="form-filters__title">Filters</div>
          <div>
            <div className="form-filters__sub-title">Vehicle equipment</div>
            <hr className="form-filters__hr" />
            <div className="form-filters__list">
              <input
                className="form-filters__item"
                type="checkbox"
                id="AC"
                name="AC"
              />
              <label htmlFor="AC">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_3_2789" fill="white">
                    <path d="M9.69 2C8.7518 2.00021 7.84263 2.32033 7.11706 2.90595C6.39148 3.49157 5.89429 4.30654 5.71 5.21231L5.6375 5.57169C5.61823 5.65208 5.61559 5.73546 5.62974 5.81688C5.64389 5.89829 5.67454 5.97606 5.71986 6.04556C5.76519 6.11507 5.82426 6.17487 5.89355 6.22142C5.96285 6.26797 6.04095 6.30031 6.12321 6.31651C6.20547 6.3327 6.29019 6.33243 6.37234 6.31571C6.45449 6.29898 6.53238 6.26614 6.60137 6.21915C6.67035 6.17216 6.72903 6.11198 6.77389 6.04219C6.81875 5.97239 6.84889 5.89442 6.8625 5.81292L6.93625 5.45477C7.0748 4.7832 7.46155 4.18615 8.02159 3.77926C8.58162 3.37237 9.27509 3.1846 9.96769 3.25232C10.6603 3.32004 11.3027 3.63843 11.7705 4.14581C12.2384 4.6532 12.4983 5.31348 12.5 5.99877C12.5 6.73333 12.2037 7.43782 11.6763 7.95735C11.1489 8.47687 10.4335 8.7689 9.6875 8.76923H0.625C0.45924 8.76923 0.300269 8.83407 0.183058 8.94947C0.0658481 9.06488 0 9.22141 0 9.38462C0 9.54783 0.0658481 9.70435 0.183058 9.81976C0.300269 9.93517 0.45924 10 0.625 10H9.6875C10.7475 9.97443 11.7554 9.54194 12.496 8.79485C13.2367 8.04775 13.6514 7.04521 13.6517 6.0012C13.652 4.95719 13.2379 3.9544 12.4978 3.20686C11.7576 2.45931 10.75 2.02621 9.69 2ZM16.875 7.53846C16.0462 7.53846 15.2513 7.86264 14.6653 8.43967C14.0792 9.01671 13.75 9.79933 13.75 10.6154C13.75 10.7786 13.8158 10.9351 13.9331 11.0505C14.0503 11.1659 14.2092 11.2308 14.375 11.2308C14.5408 11.2308 14.6997 11.1659 14.8169 11.0505C14.9342 10.9351 15 10.7786 15 10.6154C15 10.2502 15.11 9.89332 15.316 9.58972C15.522 9.28612 15.8149 9.04949 16.1575 8.90976C16.5001 8.77003 16.8771 8.73347 17.2408 8.8047C17.6045 8.87594 17.9386 9.05177 18.2008 9.30996C18.463 9.56815 18.6416 9.8971 18.714 10.2552C18.7863 10.6133 18.7492 10.9845 18.6073 11.3219C18.4654 11.6592 18.225 11.9475 17.9167 12.1504C17.6084 12.3533 17.2458 12.4615 16.875 12.4615H0.625C0.45924 12.4615 0.300269 12.5264 0.183058 12.6418C0.0658481 12.7572 0 12.9137 0 13.0769C0 13.2401 0.0658481 13.3967 0.183058 13.5121C0.300269 13.6275 0.45924 13.6923 0.625 13.6923H12.8125C13.2269 13.6931 13.624 13.856 13.9164 14.1451C14.2089 14.4342 14.3727 14.8258 14.3719 15.2338C14.371 15.6419 14.2056 16.0329 13.912 16.3208C13.6184 16.6087 13.2207 16.77 12.8062 16.7692C12.433 16.7695 12.0716 16.6396 11.7863 16.4026C11.501 16.1656 11.3101 15.8368 11.2475 15.4745L11.2413 15.4375C11.23 15.3559 11.2023 15.2773 11.1596 15.2065C11.117 15.1356 11.0603 15.0739 10.993 15.025C10.9257 14.9761 10.849 14.941 10.7677 14.9218C10.6863 14.9025 10.6019 14.8996 10.5194 14.9131C10.4368 14.9266 10.3579 14.9563 10.2872 15.0004C10.2166 15.0445 10.1556 15.1022 10.108 15.1699C10.0604 15.2376 10.0271 15.3141 10.01 15.3947C9.99298 15.4754 9.99254 15.5586 10.0087 15.6394L10.015 15.6763C10.1261 16.326 10.4675 16.916 10.9785 17.3414C11.4895 17.7668 12.1371 18.0001 12.8062 18C13.5528 18.0003 14.2691 17.7089 14.7976 17.1896C15.3261 16.6704 15.6237 15.9659 15.625 15.2308C15.625 14.6609 15.45 14.1317 15.1513 13.6923H16.875C17.7038 13.6923 18.4987 13.3681 19.0847 12.7911C19.6708 12.2141 20 11.4314 20 10.6154C20 9.79933 19.6708 9.01671 19.0847 8.43967C18.4987 7.86264 17.7038 7.53846 16.875 7.53846Z" />
                  </mask>
                  <path
                    d="M9.69 2C8.7518 2.00021 7.84263 2.32033 7.11706 2.90595C6.39148 3.49157 5.89429 4.30654 5.71 5.21231L5.6375 5.57169C5.61823 5.65208 5.61559 5.73546 5.62974 5.81688C5.64389 5.89829 5.67454 5.97606 5.71986 6.04556C5.76519 6.11507 5.82426 6.17487 5.89355 6.22142C5.96285 6.26797 6.04095 6.30031 6.12321 6.31651C6.20547 6.3327 6.29019 6.33243 6.37234 6.31571C6.45449 6.29898 6.53238 6.26614 6.60137 6.21915C6.67035 6.17216 6.72903 6.11198 6.77389 6.04219C6.81875 5.97239 6.84889 5.89442 6.8625 5.81292L6.93625 5.45477C7.0748 4.7832 7.46155 4.18615 8.02159 3.77926C8.58162 3.37237 9.27509 3.1846 9.96769 3.25232C10.6603 3.32004 11.3027 3.63843 11.7705 4.14581C12.2384 4.6532 12.4983 5.31348 12.5 5.99877C12.5 6.73333 12.2037 7.43782 11.6763 7.95735C11.1489 8.47687 10.4335 8.7689 9.6875 8.76923H0.625C0.45924 8.76923 0.300269 8.83407 0.183058 8.94947C0.0658481 9.06488 0 9.22141 0 9.38462C0 9.54783 0.0658481 9.70435 0.183058 9.81976C0.300269 9.93517 0.45924 10 0.625 10H9.6875C10.7475 9.97443 11.7554 9.54194 12.496 8.79485C13.2367 8.04775 13.6514 7.04521 13.6517 6.0012C13.652 4.95719 13.2379 3.9544 12.4978 3.20686C11.7576 2.45931 10.75 2.02621 9.69 2ZM16.875 7.53846C16.0462 7.53846 15.2513 7.86264 14.6653 8.43967C14.0792 9.01671 13.75 9.79933 13.75 10.6154C13.75 10.7786 13.8158 10.9351 13.9331 11.0505C14.0503 11.1659 14.2092 11.2308 14.375 11.2308C14.5408 11.2308 14.6997 11.1659 14.8169 11.0505C14.9342 10.9351 15 10.7786 15 10.6154C15 10.2502 15.11 9.89332 15.316 9.58972C15.522 9.28612 15.8149 9.04949 16.1575 8.90976C16.5001 8.77003 16.8771 8.73347 17.2408 8.8047C17.6045 8.87594 17.9386 9.05177 18.2008 9.30996C18.463 9.56815 18.6416 9.8971 18.714 10.2552C18.7863 10.6133 18.7492 10.9845 18.6073 11.3219C18.4654 11.6592 18.225 11.9475 17.9167 12.1504C17.6084 12.3533 17.2458 12.4615 16.875 12.4615H0.625C0.45924 12.4615 0.300269 12.5264 0.183058 12.6418C0.0658481 12.7572 0 12.9137 0 13.0769C0 13.2401 0.0658481 13.3967 0.183058 13.5121C0.300269 13.6275 0.45924 13.6923 0.625 13.6923H12.8125C13.2269 13.6931 13.624 13.856 13.9164 14.1451C14.2089 14.4342 14.3727 14.8258 14.3719 15.2338C14.371 15.6419 14.2056 16.0329 13.912 16.3208C13.6184 16.6087 13.2207 16.77 12.8062 16.7692C12.433 16.7695 12.0716 16.6396 11.7863 16.4026C11.501 16.1656 11.3101 15.8368 11.2475 15.4745L11.2413 15.4375C11.23 15.3559 11.2023 15.2773 11.1596 15.2065C11.117 15.1356 11.0603 15.0739 10.993 15.025C10.9257 14.9761 10.849 14.941 10.7677 14.9218C10.6863 14.9025 10.6019 14.8996 10.5194 14.9131C10.4368 14.9266 10.3579 14.9563 10.2872 15.0004C10.2166 15.0445 10.1556 15.1022 10.108 15.1699C10.0604 15.2376 10.0271 15.3141 10.01 15.3947C9.99298 15.4754 9.99254 15.5586 10.0087 15.6394L10.015 15.6763C10.1261 16.326 10.4675 16.916 10.9785 17.3414C11.4895 17.7668 12.1371 18.0001 12.8062 18C13.5528 18.0003 14.2691 17.7089 14.7976 17.1896C15.3261 16.6704 15.6237 15.9659 15.625 15.2308C15.625 14.6609 15.45 14.1317 15.1513 13.6923H16.875C17.7038 13.6923 18.4987 13.3681 19.0847 12.7911C19.6708 12.2141 20 11.4314 20 10.6154C20 9.79933 19.6708 9.01671 19.0847 8.43967C18.4987 7.86264 17.7038 7.53846 16.875 7.53846Z"
                    fill="#101828"
                  />
                  <path
                    d="M9.69 2L9.8136 -2.99847L9.75126 -3.00001L9.6889 -3L9.69 2ZM5.71 5.21231L0.810378 4.21542L0.808736 4.22356L5.71 5.21231ZM5.6375 5.57169L10.4997 6.73738L10.5208 6.64926L10.5388 6.56044L5.6375 5.57169ZM6.8625 5.81292L1.96525 4.80449L1.94629 4.89657L1.9308 4.98929L6.8625 5.81292ZM6.93625 5.45477L2.03938 4.4445L2.039 4.44634L6.93625 5.45477ZM12.5 5.99877L17.5 5.99877L17.5 5.98632L12.5 5.99877ZM9.6875 8.76923V13.7692L9.68969 13.7692L9.6875 8.76923ZM0 9.38462H-5H0ZM9.6875 10V15H9.7478L9.80808 14.9985L9.6875 10ZM15 10.6154H20H15ZM0 13.0769H-5H0ZM12.8125 13.6923L12.8223 8.69231H12.8125V13.6923ZM12.8062 16.7692L12.8161 11.7692L12.8027 11.7692L12.8062 16.7692ZM11.2475 15.4745L6.31763 16.309L6.31906 16.3174L6.32051 16.3258L11.2475 15.4745ZM11.2413 15.4375L6.28794 16.1192L6.29848 16.1958L6.31138 16.272L11.2413 15.4375ZM10.0087 15.6394L14.9386 14.8049L14.926 14.7303L14.9111 14.6562L10.0087 15.6394ZM10.015 15.6763L5.08512 16.5108L5.08658 16.5193L10.015 15.6763ZM12.8062 18L12.8084 13L12.8053 13L12.8062 18ZM15.625 15.2308L20.625 15.2398V15.2308H15.625ZM15.1513 13.6923V8.69231H5.70532L11.0165 16.5037L15.1513 13.6923ZM9.6889 -3C7.61603 -2.99955 5.59727 -2.29281 3.97674 -0.984856L10.2574 6.79676C10.088 6.93347 9.88758 6.99996 9.6911 7L9.6889 -3ZM3.97674 -0.984856C2.35462 0.324378 1.22882 2.15886 0.810385 4.21542L10.6096 6.20919C10.5598 6.45423 10.4284 6.65877 10.2574 6.79676L3.97674 -0.984856ZM0.808736 4.22356L0.736237 4.58295L10.5388 6.56044L10.6113 6.20105L0.808736 4.22356ZM0.775281 4.40601C0.59723 5.14868 0.572719 5.9201 0.703591 6.67308L10.5559 4.96068C10.6585 5.55083 10.6392 6.15548 10.4997 6.73738L0.775281 4.40601ZM0.703591 6.67308C0.834446 7.42595 1.11728 8.14125 1.53171 8.77675L9.90801 3.31438C10.2318 3.81088 10.4533 4.37063 10.5559 4.96068L0.703591 6.67308ZM1.53171 8.77675C1.94601 9.41206 2.48245 9.95341 3.10551 10.3719L8.68159 2.0709C9.16606 2.39634 9.58436 2.81807 9.90801 3.31438L1.53171 8.77675ZM3.10551 10.3719C3.7284 10.7904 4.42633 11.0784 5.15715 11.2223L7.08927 1.41072C7.65557 1.52224 8.19729 1.74558 8.68159 2.0709L3.10551 10.3719ZM5.15715 11.2223C5.88787 11.3662 6.64 11.3638 7.36988 11.2152L5.37481 1.41623C5.94039 1.30107 6.52306 1.29922 7.08927 1.41072L5.15715 11.2223ZM7.36988 11.2152C8.09984 11.0666 8.79598 10.774 9.41622 10.3515L3.78651 2.08677C4.26878 1.75826 4.80915 1.53139 5.37481 1.41623L7.36988 11.2152ZM9.41622 10.3515C10.0367 9.92891 10.5696 9.38399 10.9799 8.74587L2.56793 3.3385C2.8884 2.83996 3.30405 2.41541 3.78651 2.08677L9.41622 10.3515ZM10.9799 8.74587C11.3902 8.10753 11.6683 7.39029 11.7942 6.63655L1.9308 4.98929C2.02946 4.39856 2.24732 3.83726 2.56793 3.3385L10.9799 8.74587ZM11.7598 6.82135L11.8335 6.4632L2.039 4.44634L1.96525 4.80449L11.7598 6.82135ZM11.8331 6.46504C11.7173 7.0265 11.3978 7.50664 10.9605 7.82436L5.08268 -0.265839C3.5253 0.865653 2.43232 2.53989 2.03938 4.4445L11.8331 6.46504ZM10.9605 7.82436C10.5253 8.14056 9.99872 8.2792 9.48113 8.22859L10.4542 -1.72395C8.55147 -1.90999 6.63797 -1.39581 5.08268 -0.265839L10.9605 7.82436ZM9.48113 8.22859C8.96306 8.17794 8.46663 7.93864 8.0946 7.53514L15.4465 0.756486C14.1388 -0.66178 12.3575 -1.53785 10.4542 -1.72395L9.48113 8.22859ZM8.0946 7.53514C7.72063 7.12956 7.50145 6.58743 7.50002 6.01122L17.5 5.98632C17.4951 4.03954 16.7561 2.17685 15.4465 0.756486L8.0946 7.53514ZM7.5 5.99877C7.5 5.38241 7.74933 4.80721 8.1675 4.39529L15.1851 11.5194C16.6581 10.0684 17.5 8.08425 17.5 5.99877L7.5 5.99877ZM8.1675 4.39529C8.58305 3.98596 9.13044 3.76947 9.68531 3.76923L9.68969 13.7692C11.7366 13.7683 13.7148 12.9678 15.1851 11.5194L8.1675 4.39529ZM9.6875 3.76923H0.625V13.7692H9.6875V3.76923ZM0.625 3.76923C-0.842035 3.76923 -2.26432 4.34231 -3.32496 5.38664L3.69108 12.5123C2.86486 13.3258 1.76051 13.7692 0.625 13.7692V3.76923ZM-3.32496 5.38664C-4.38823 6.43355 -5 7.87009 -5 9.38462L5 9.38462C5 10.5727 4.51993 11.6962 3.69108 12.5123L-3.32496 5.38664ZM-5 9.38462C-5 10.8991 -4.38823 12.3357 -3.32496 13.3826L3.69108 6.25692C4.51993 7.07302 5 8.19651 5 9.38462L-5 9.38462ZM-3.32496 13.3826C-2.26432 14.4269 -0.842035 15 0.625 15V5C1.76051 5 2.86486 5.44341 3.69108 6.25692L-3.32496 13.3826ZM0.625 15H9.6875V5H0.625V15ZM9.80808 14.9985C12.1481 14.9421 14.3887 13.9876 16.0469 12.315L8.94516 5.2747C9.12203 5.09629 9.34686 5.00676 9.56692 5.00145L9.80808 14.9985ZM16.0469 12.315C17.7075 10.6399 18.651 8.37608 18.6517 6.00276L8.65172 5.99964C8.65181 5.71434 8.76585 5.45557 8.94516 5.2747L16.0469 12.315ZM18.6517 6.00276C18.6525 3.62945 17.7104 1.365 16.0508 -0.311106L8.94474 6.72482C8.76552 6.5438 8.65163 6.28494 8.65172 5.99964L18.6517 6.00276ZM16.0508 -0.311106C14.3937 -1.98475 12.1536 -2.94061 9.8136 -2.99847L9.5664 6.99847C9.34633 6.99303 9.12153 6.90336 8.94474 6.72482L16.0508 -0.311106ZM16.875 2.53846C14.7449 2.53846 12.6868 3.37089 11.1573 4.87684L18.1733 12.0025C17.8159 12.3544 17.3475 12.5385 16.875 12.5385V2.53846ZM11.1573 4.87684C9.62516 6.38537 8.75 8.44802 8.75 10.6154H18.75C18.75 11.1507 18.5333 11.648 18.1733 12.0025L11.1573 4.87684ZM8.75 10.6154C8.75 12.1299 9.36176 13.5664 10.425 14.6134L17.4411 7.48769C18.2699 8.3038 18.75 9.42729 18.75 10.6154H8.75ZM10.425 14.6134C11.4857 15.6577 12.908 16.2308 14.375 16.2308V6.23077C15.5105 6.23077 16.6149 6.67418 17.4411 7.48769L10.425 14.6134ZM14.375 16.2308C15.842 16.2308 17.2643 15.6577 18.325 14.6134L11.3089 7.48769C12.1351 6.67418 13.2395 6.23077 14.375 6.23077V16.2308ZM18.325 14.6134C19.3882 13.5664 20 12.1299 20 10.6154H10C10 9.42729 10.4801 8.3038 11.3089 7.48769L18.325 14.6134ZM20 10.6154C20 11.2566 19.8065 11.8768 19.4533 12.3974L11.1787 6.78208C10.4134 7.90979 10 9.24393 10 10.6154H20ZM19.4533 12.3974C19.1007 12.9169 18.6078 13.3103 18.0457 13.5395L14.2693 4.28C13.0219 4.78871 11.9433 5.65531 11.1787 6.78208L19.4533 12.3974ZM18.0457 13.5395C17.4842 13.7685 16.8708 13.8272 16.2798 13.7115L18.2018 3.89793C16.8833 3.6397 15.5159 3.77157 14.2693 4.28L18.0457 13.5395ZM16.2798 13.7115C15.6884 13.5957 15.1347 13.3079 14.6928 12.8728L21.7088 5.74712C20.7425 4.79565 19.5206 4.15622 18.2018 3.89793L16.2798 13.7115ZM14.6928 12.8728C14.2501 12.4369 13.9396 11.872 13.813 11.2453L23.615 9.26512C23.3437 7.92218 22.676 6.69941 21.7088 5.74712L14.6928 12.8728ZM13.813 11.2453C13.6863 10.6181 13.752 9.96887 13.9985 9.38303L23.2161 13.2607C23.7463 12.0002 23.8864 10.6086 23.615 9.26512L13.813 11.2453ZM13.9985 9.38303C14.2446 8.79803 14.656 8.31058 15.1686 7.97333L20.6648 16.3275C21.7941 15.5845 22.6861 14.5204 23.2161 13.2607L13.9985 9.38303ZM15.1686 7.97333C15.6804 7.63664 16.274 7.46154 16.875 7.46154V17.4615C18.2176 17.4615 19.5363 17.0699 20.6648 16.3275L15.1686 7.97333ZM16.875 7.46154H0.625V17.4615H16.875V7.46154ZM0.625 7.46154C-0.842035 7.46154 -2.26432 8.03462 -3.32496 9.07895L3.69108 16.2046C2.86486 17.0181 1.76051 17.4615 0.625 17.4615V7.46154ZM-3.32496 9.07895C-4.38823 10.1259 -5 11.5624 -5 13.0769H5C5 14.265 4.51993 15.3885 3.69108 16.2046L-3.32496 9.07895ZM-5 13.0769C-5 14.5914 -4.38823 16.028 -3.32496 17.0749L3.69108 9.94923C4.51993 10.7653 5 11.8888 5 13.0769H-5ZM-3.32496 17.0749C-2.26432 18.1192 -0.842035 18.6923 0.625 18.6923V8.69231C1.76051 8.69231 2.86486 9.13572 3.69108 9.94923L-3.32496 17.0749ZM0.625 18.6923H12.8125V8.69231H0.625V18.6923ZM12.8027 18.6923C11.9158 18.6906 11.0505 18.3427 10.4013 17.7009L17.4316 10.5893C16.1975 9.36932 14.538 8.6957 12.8223 8.69232L12.8027 18.6923ZM10.4013 17.7009C9.74948 17.0565 9.36997 16.167 9.37189 15.2237L19.3719 15.244C19.3754 13.4846 18.6683 11.8118 17.4316 10.5893L10.4013 17.7009ZM9.37189 15.2237C9.3738 14.2804 9.7569 13.3926 10.4111 12.751L17.4129 19.8906C18.6544 18.6732 19.3683 17.0033 19.3719 15.244L9.37189 15.2237ZM10.4111 12.751C11.0627 12.1119 11.9292 11.7675 12.8161 11.7692L12.7964 21.7692C14.5121 21.7726 16.1741 21.1055 17.4129 19.8906L10.4111 12.751ZM12.8027 11.7692C13.5894 11.7687 14.3616 12.0418 14.9811 12.5564L8.59149 20.2488C9.7817 21.2374 11.2765 21.7703 12.8098 21.7692L12.8027 11.7692ZM14.9811 12.5564C15.6024 13.0725 16.0326 13.8017 16.1745 14.6231L6.32051 16.3258C6.58766 17.8719 7.39955 19.2587 8.59149 20.2488L14.9811 12.5564ZM16.1774 14.64L16.1711 14.603L6.31138 16.272L6.31763 16.309L16.1774 14.64ZM16.1946 14.7559C16.0906 14.0007 15.8342 13.2772 15.4437 12.6283L6.87554 17.7846C6.57033 17.2774 6.3694 16.7112 6.28794 16.1192L16.1946 14.7559ZM15.4437 12.6283C15.0533 11.9796 14.5379 11.4201 13.9317 10.9797L8.05429 19.0702C7.58273 18.7277 7.18064 18.2916 6.87554 17.7846L15.4437 12.6283ZM13.9317 10.9797C13.3256 10.5395 12.6402 10.2264 11.9169 10.0556L9.61845 19.7879C9.05786 19.6555 8.52568 19.4127 8.05429 19.0702L13.9317 10.9797ZM11.9169 10.0556C11.1937 9.88483 10.4441 9.85885 9.71128 9.97886L11.3274 19.8474C10.7597 19.9404 10.1789 19.9203 9.61845 19.7879L11.9169 10.0556ZM9.71128 9.97886C8.97843 10.0989 8.27382 10.3631 7.63952 10.759L12.935 19.2418C12.442 19.5496 11.8952 19.7544 11.3274 19.8474L9.71128 9.97886ZM7.63952 10.759C7.00504 11.1551 6.45244 11.6759 6.01778 12.2942L14.1983 18.0456C13.8589 18.5284 13.4281 18.934 12.935 19.2418L7.63952 10.759ZM6.01778 12.2942C5.58299 12.9126 5.27582 13.6149 5.11821 14.3603L14.9019 16.4292C14.7783 17.0132 14.5378 17.5627 14.1983 18.0456L6.01778 12.2942ZM5.11821 14.3603C4.96057 15.1058 4.95653 15.8755 5.10637 16.6226L14.9111 14.6562C15.0286 15.2417 15.0254 15.845 14.9019 16.4292L5.11821 14.3603ZM5.07888 16.4739L5.08513 16.5108L14.9449 14.8418L14.9386 14.8049L5.07888 16.4739ZM5.08658 16.5193C5.40043 18.3542 6.36191 20.0039 7.77949 21.1841L14.1775 13.4987C14.5731 13.828 14.8518 14.2979 14.9434 14.8333L5.08658 16.5193ZM7.77949 21.1841C9.19534 22.3628 10.9771 23.0004 12.8072 23L12.8053 13C13.297 12.9999 13.7837 13.1708 14.1775 13.4987L7.77949 21.1841ZM12.8041 23C14.8508 23.0009 16.8295 22.2026 18.3016 20.7564L11.2935 13.6229C11.7086 13.2151 12.2549 12.9998 12.8084 13L12.8041 23ZM18.3016 20.7564C19.7764 19.3075 20.6212 17.325 20.625 15.2398L10.625 15.2218C10.6261 14.6067 10.8758 14.0333 11.2935 13.6229L18.3016 20.7564ZM20.625 15.2308C20.625 13.6205 20.1269 12.1177 19.286 10.881L11.0165 16.5037C10.7731 16.1457 10.625 15.7014 10.625 15.2308H20.625ZM15.1513 18.6923H16.875V8.69231H15.1513V18.6923ZM16.875 18.6923C19.0051 18.6923 21.0632 17.8599 22.5927 16.3539L15.5767 9.22826C15.9341 8.87638 16.4025 8.69231 16.875 8.69231V18.6923ZM22.5927 16.3539C24.1248 14.8454 25 12.7828 25 10.6154H15C15 10.0801 15.2167 9.58273 15.5767 9.22826L22.5927 16.3539ZM25 10.6154C25 8.44802 24.1248 6.38537 22.5927 4.87684L15.5767 12.0025C15.2167 11.648 15 11.1507 15 10.6154H25ZM22.5927 4.87684C21.0632 3.37089 19.0051 2.53846 16.875 2.53846V12.5385C16.4025 12.5385 15.9341 12.3544 15.5767 12.0025L22.5927 4.87684Z"
                    fill="#101828"
                    mask="url(#path-1-inside-1_3_2789)"
                  />
                </svg>
                AC
              </label>
              <input type="checkbox" id="Automatic" name="Automatic" />
              <label className="form-filters__item" htmlFor="Automatic">
                <svg width="32" height="32">
                  <use href={sprite + '#icon-automatic'}></use>
                </svg>
                Automatic
              </label>
              <input type="checkbox" id="Kitchen" name="Kitchen" />
              <label className="form-filters__item" htmlFor="Kitchen">
                <svg width="32" height="32" className="icon">
                  <use href={sprite + '#icon-kitchen'}></use>
                </svg>
                Kitchen
              </label>
              <input type="checkbox" id="TV" name="TV" />
              <label className="form-filters__item" htmlFor="TV">
                <svg width="32" height="32">
                  <use href={sprite + '#icon-tv'}></use>
                </svg>
                TV
              </label>
              <input type="checkbox" id="Shower" name="Shower" />
              <label className="form-filters__item" htmlFor="Shower">
                <svg width="32" height="33">
                  <use href={sprite + '#icon-shower'}></use>
                </svg>
                Shower/WC
              </label>
            </div>
          </div>
          <div>
            <div>
              <div className="form-filters__sub-title">Vehicle type</div>
              <hr className="form-filters__hr" />

              <div className="form-filters__list">
                <input
                  type="radio"
                  id="Van"
                  name="type"
                  value="panelTruck"
                  defaultChecked
                />
                <label className="form-filters__item" htmlFor="Van">
                  <svg width="40" height="28">
                    <use href={sprite + '#icon-van'}></use>
                  </svg>
                  Van
                </label>

                <input
                  type="radio"
                  id="FullyIntegrated"
                  name="type"
                  value="fullyIntegrated"
                />
                <label className="form-filters__item" htmlFor="FullyIntegrated">
                  <svg width="40" height="29">
                    <use href={sprite + '#icon-integrated'}></use>
                  </svg>
                  Fully Integrated
                </label>

                <input type="radio" id="Alcove" name="type" value="Alcove" />
                <label className="form-filters__item" htmlFor="Alcove">
                  <svg width="40" height="28">
                    <use href={sprite + '#icon-alcove'}></use>
                  </svg>
                  Alcove
                </label>
              </div>
            </div>
          </div>
        </div>
        <Button text={'Search'} type={'color form-filters__btn'}></Button>
      </form>
    </div>
  );
};

export default Filters;
