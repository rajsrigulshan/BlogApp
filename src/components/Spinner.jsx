// Spinner.jsx
const Spinner = () => (
  <div style={styles.spinner}></div>
);

const styles = {
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #ccc',
    borderTop: '4px solid #007BFF',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};

export default Spinner;
