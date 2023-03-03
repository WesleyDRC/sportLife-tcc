import styles from './FormInput.module.css'

export default function Input(props) {
  return (
    <div className={`${styles.formInput} ${styles.formInputPass}`}>
      <input type={props.type} placeholder={props.placeholder} />
      <div className={props.eye ? styles.eyePass : styles.notEye}>
        <svg
          width="17"
          height="13"
          viewBox="0 0 17 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.6113 7.64228C9.43104 7.83574 9.21365 7.9909 8.97212 8.09852C8.73058 8.20614 8.46985 8.26401 8.20546 8.26868C7.94108 8.27334 7.67846 8.22471 7.43328 8.12568C7.1881 8.02664 6.96537 7.87924 6.7784 7.69226C6.59142 7.50529 6.44402 7.28256 6.34498 7.03738C6.24595 6.7922 6.19732 6.52958 6.20198 6.2652C6.20664 6.00081 6.26451 5.74008 6.37213 5.49854C6.47975 5.25701 6.63492 5.03962 6.82838 4.85936M12.1186 10.1495C10.9966 11.0048 9.63041 11.4786 8.21984 11.5016C3.62539 11.5016 0.99999 6.25082 0.99999 6.25082C1.81642 4.72933 2.94878 3.40003 4.32112 2.3521L12.1186 10.1495ZM6.84151 1.15754C7.29329 1.05179 7.75584 0.998926 8.21984 1.00002C12.8143 1.00002 15.4397 6.25082 15.4397 6.25082C15.0413 6.99617 14.5661 7.6979 14.022 8.34457L6.84151 1.15754Z"
            stroke="white"
            stroke-width="1.3127"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
