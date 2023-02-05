import Accordion from "react-bootstrap/Accordion";
import Navbar from "./Navbar";

function FAQ() {
	return (
		<>
			<Navbar />
			<div>
				<Accordion defaultActiveKey="0">
					<Accordion.Item eventKey="0">
						<Accordion.Header>
							1.what is Live gold Price means?
						</Accordion.Header>
						<Accordion.Body>
							Live gold price means the gold rate in Indian Rupees
							(INR) per gram of (999.9) fine gold as posted from
							time to time, exclusive of product
							manufacturing/making charges and delivery charges.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>
							2.How do i open my account for NeoTrade?
						</Accordion.Header>
						<Accordion.Body>
							Customer needs to register themselves on Neotrade by
							personal Details and mobile number . And login
							themselves to explore our applications.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>
							3.Do i require to complete my KYC to open my
							Neotrade Account?
						</Accordion.Header>
						<Accordion.Body>
							Yes it is neccesary to complete the KYC while
							filling the details.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>
							4.Are my gold account details shared with tax
							authorities?
						</Accordion.Header>
						<Accordion.Body>
							No. Only, in case of any enquires by government
							authorities, we will have to provide the requested
							information.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header>
							5.Is there any fees for registering to neotrade?
						</Accordion.Header>
						<Accordion.Body>
							There is no registration fee to open a Neotrade
							account. Any valid user can open a Neotrade account.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="5">
						<Accordion.Header>
							6.How do i digitally buy gold?
						</Accordion.Header>
						<Accordion.Body>
							You can make an offer to buy Gold at the rate
							displayed on the Neotrade in either rupees or grams.
							For example, you can buy gold worth INR1 and above
							or 0.1 gram and above.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="6">
						<Accordion.Header>
							7.How often does the live prices changes?
						</Accordion.Header>
						<Accordion.Body>
							The live rate changes based on market conditions and
							is updated frequently.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="7">
						<Accordion.Header>
							8.How long is the live price valid for completing
							the transaction?
						</Accordion.Header>
						<Accordion.Body>
							The live price, at which you choose to buy Gold,
							will be valid for 5-10 minutes from the time you
							click on the option to buy. In case you fail to
							complete the transaction during this time-frame, you
							will be redirected to the new live price, at which
							point you can restart the transaction to make a
							fresh offer to buy.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="8">
						<Accordion.Header>
							9.After purchasing digital gold,when can i see gold
							grams credit into my gold account?
						</Accordion.Header>
						<Accordion.Body>
							After making the payment, when admin accepts your
							offer to buy, you will receive an invoice and the
							said quantity will be reflected in your neotrade
							Gold account under vault balance.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="9">
						<Accordion.Header>
							10.what if my money gets debited but i dont receive
							gold into account?
						</Accordion.Header>
						<Accordion.Body>
							In the rare event of technical failure, Admin may
							reject your offer to buy. The amount paid by you
							will be refunded in your partner platform account
							within the time frame prescribed by your partner
							platform account. You can initiate the transaction
							to buy digital gold again on the partner platform.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="10">
						<Accordion.Header>
							11.Is there any restriction on the amount of gold
							that can be purchased in a single day?
						</Accordion.Header>
						<Accordion.Body>
							The maximum limit to buy gold in a single day is INR
							1 lakhs. The value of a single transaction or
							cumulative value of transactions in a day should not
							exceed INR 1 lakhs.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="11">
						<Accordion.Header>
							12.Can i cancel my gold purchase?
						</Accordion.Header>
						<Accordion.Body>
							Once Admin has accepted your offer to buy,
							cancellations or refunds are not allowed. You can
							however sell your gold back to online 72 hours after
							your first purchase.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="12">
						<Accordion.Header>
							13.What modes of payments are accepted?
						</Accordion.Header>
						<Accordion.Body>
							Customers can make the payment through different
							digital payment modes like net banking, debit/credit
							cards as accepted on the partner platform.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="13">
						<Accordion.Header>
							14.How do i sell gold i have accumulated?
						</Accordion.Header>
						<Accordion.Body>
							When the sale back window (open sale back window) is
							active, you can offer to sell your Gold accumulated
							on Neotrade Platform in either Rupees or Gram. For
							example, you can offer to sell either 0.1 gram or
							INR 1 and above. Your Gold account holdings should
							be equal to or higher than the quantity you offer to
							sell. In case of any technical failure, Admin may
							reject your offer to sell. The money against the
							quantity offered by you to sell will be credited to
							your bank account as per the details shared by you.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="14">
						<Accordion.Header>
							15.How i redeem my gold?
						</Accordion.Header>
						<Accordion.Body>
							You can select the quantity and denomination of the
							gold you wish to redeem from the available options
							of coins on the Neotrade platform. You can request
							for all or part of your gold holding between 1 gram
							and multiples thereof. Gold holding of customer
							shall be equal to or higher than the quantity you
							offer to redeem.Each coin will have different making
							charges, based on the weight and design of the
							coin.The PIN code mentioned in the delivery address
							should be in serviceable location of logistic
							partner, if it is not then the order shall be
							rejected and in that case you can sell back your
							holdings provided open sale back window is open.You
							must confirm the transaction by paying the
							additional making and delivery charges. Your gold
							product will be delivered at your notified address
							by a logistics provider.The making and delivery
							charges shall be paid through acceptable payment
							modes only.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="15">
						<Accordion.Header>
							16.How do i close my account?
						</Accordion.Header>
						<Accordion.Body>
							Customer needs to place the request for delivery
							redeemption or sell back, if sale back window is
							active for liquidating the gold holding, if any. If
							you do not have any gold balance in your gold
							account, no action is required from the customer's
							end
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="16">
						<Accordion.Header>
							17.What are making and delivery charges?
						</Accordion.Header>
						<Accordion.Body>
							Making charges are the costs of
							manufacturing/minting Gold into a coin. This
							includes the cost of packaging the coin in tamper
							proof Certicards. Delivery charges are the logistics
							cost to deliver high value gold safely to your
							location.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		</>
	);
}

export default FAQ;
