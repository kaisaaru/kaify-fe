import Paypal from "./molecule/statistic/Paypal";
import RazorPay from "./molecule/statistic/RazorPay";

const PaymentGatewayLayer = () => {
  return (
    <div className='card h-100 p-0 radius-12'>
      <div className='card-body p-24'>
        <div className='row gy-4'>
          {/* Paypal */}
          <Paypal />

          {/* RazorPay */}
          <RazorPay />
        </div>
      </div>
    </div>
  );
};

export default PaymentGatewayLayer;
