import Style from '../../../styles/social-media-icon.module.css';

const LinkedinIconSvg: React.FC = () => {
  return (
    <svg
      className={Style['social-svg']}
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>linkedin</title>
      <g className={Style['social-group']} fill="none" fillRule="evenodd">
        <circle
          className={Style['social-group__outline']}
          stroke="#000"
          strokeWidth="20"
          cx="300"
          cy="300"
          r="262.5"
        />
        <circle
          className={Style['social-group__inner-circle']}
          fill="#2D76B0"
          cx="300"
          cy="300"
          r="252.5"
        />
        <path
          className={Style['social-group__icon']}
          d="M278.9308 253.1923h43.5769v20.0539h.5923c6.0923-11.5077 20.9-23.6077 43.0692-23.6077 46.0308 0 54.577 30.2923 54.577 69.723v80.2154h-45.4385v-71.1615c0-17.0077-.2539-38.8385-23.6077-38.8385-23.6923 0-27.2462 18.5308-27.2462 37.5693v72.4307h-45.4384l-.0846-146.3846zm-74.1231 0h45.523V399.577h-45.523V253.1923zm22.8461-72.7692c14.5539 0 26.4 11.8461 26.4 26.4 0 14.5538-11.8461 26.4-26.4 26.4-14.6384 0-26.4-11.8462-26.4-26.4 0-14.5539 11.7616-26.4 26.4-26.4z"
          fill="#000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default LinkedinIconSvg;
