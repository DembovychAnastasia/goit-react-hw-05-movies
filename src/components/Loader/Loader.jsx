import { Triangle } from 'react-loader-spinner';

export const Loader = () => {
    return (
      <Triangle
        visible={true}
        height="80"
        width="80"
        color= "#ff0303"
        ariaLabel="blocks-loading"
        wrapperStyle={{
          display: 'block',
          marginTop: 20,
          // marginLeft: 'auto',
          // marginRight: 'auto',
        }}
      />
    );
}