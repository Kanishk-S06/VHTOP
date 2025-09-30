// Abstraction
interface IPaymentService {
  processPayment(amount: number, orderId: string): Promise<boolean>;
}

// High-level module depends on abstraction
class FoodServicesModule {
  constructor(private paymentService: IPaymentService) {}

  async orderFood(amount: number, orderId: string) {
    const success = await this.paymentService.processPayment(amount, orderId);
    if (success) {
      console.log("Food order confirmed!");
    } else {
      console.log("Payment failed.");
    }
  }
}

// Low-level module: Razorpay implementation
class RazorpayPaymentService implements IPaymentService {
  async processPayment(amount: number, orderId: string): Promise<boolean> {
    // Razorpay SDK logic here
    console.log(`Processing Razorpay payment for ${orderId}`);
    return true;
  }
}
