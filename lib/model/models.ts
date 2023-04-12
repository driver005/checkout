import localVarRequest from 'request';

export * from './accountAccount';
export * from './attemptSetupAttempt';
export * from './attemptStatus';
export * from './attemptUsage';
export * from './balanceBalance';
export * from './balanceBalanceTransaction';
export * from './balanceStatus';
export * from './balanceType';
export * from './bankAccountHolderType';
export * from './bankAccountType';
export * from './bankBankAccount';
export * from './bankStatus';
export * from './cardAddressLine1Check';
export * from './cardAddressZipCheck';
export * from './cardBrand';
export * from './cardCvcCheck';
export * from './cardFunding';
export * from './cardTokenizationMethod';
export * from './cashCashBalance';
export * from './chargeCharge';
export * from './chargeStatus';
export * from './checkoutBillingAddressCollection';
export * from './checkoutCheckoutSession';
export * from './checkoutCustomerCreation';
export * from './checkoutLocale';
export * from './checkoutMode';
export * from './checkoutPaymentMethodCollection';
export * from './checkoutPaymentStatus';
export * from './checkoutStatus';
export * from './checkoutSubmitType';
export * from './couponCoupon';
export * from './couponDuration';
export * from './creditCreditNote';
export * from './creditType';
export * from './customerCustomer';
export * from './customerTaxExempt';
export * from './databaseDeletedAt';
export * from './discountDiscount';
export * from './disputeDispute';
export * from './disputeReason';
export * from './disputeStatus';
export * from './fileFile';
export * from './filePurpose';
export * from './githubComDriver005GatewayInternalIntentCancellationReason';
export * from './githubComDriver005GatewayInternalIntentStatus';
export * from './githubComDriver005GatewayInternalSetupIntentCancellationReason';
export * from './githubComDriver005GatewayInternalSetupIntentStatus';
export * from './githubComDriver005GatewayPaymentCardCard';
export * from './intentCaptureMethod';
export * from './intentConfirmationMethod';
export * from './intentPaymentIntent';
export * from './intentSetupFutureUsage';
export * from './intentSetupIntent';
export * from './intentUsage';
export * from './invoiceBillingReason';
export * from './invoiceCollectionMethod';
export * from './invoiceInvoice';
export * from './invoiceItemInvoiceitem';
export * from './invoiceStatus';
export * from './itemLineItem';
export * from './linkPaymentLink';
export * from './mandateMandate';
export * from './mandateStatus';
export * from './mandateType';
export * from './methodPaymentMethod';
export * from './methodType';
export * from './payoutMethod';
export * from './payoutPayout';
export * from './payoutSourceType';
export * from './payoutStatus';
export * from './payoutType';
export * from './planPlan';
export * from './priceBillingScheme';
export * from './pricePrice';
export * from './priceTaxBehavior';
export * from './priceTiersMode';
export * from './priceType';
export * from './productProduct';
export * from './promotionPromotionCode';
export * from './quoteQuote';
export * from './refundFailureReason';
export * from './refundReason';
export * from './refundRefund';
export * from './refundStatus';
export * from './sourceFlow';
export * from './sourceSource';
export * from './sourceStatus';
export * from './sourceType';
export * from './sourceUsage';
export * from './subscriptionItemSubscriptionItem';
export * from './subscriptionScheduleSubscriptionSchedule';
export * from './subscriptionSubscription';
export * from './usageRecordUsageRecord';
export * from './uuidNullUUID';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountAccount } from './accountAccount';
import { AttemptSetupAttempt } from './attemptSetupAttempt';
import { AttemptStatus } from './attemptStatus';
import { AttemptUsage } from './attemptUsage';
import { BalanceBalance } from './balanceBalance';
import { BalanceBalanceTransaction } from './balanceBalanceTransaction';
import { BalanceStatus } from './balanceStatus';
import { BalanceType } from './balanceType';
import { BankAccountHolderType } from './bankAccountHolderType';
import { BankAccountType } from './bankAccountType';
import { BankBankAccount } from './bankBankAccount';
import { BankStatus } from './bankStatus';
import { CardAddressLine1Check } from './cardAddressLine1Check';
import { CardAddressZipCheck } from './cardAddressZipCheck';
import { CardBrand } from './cardBrand';
import { CardCvcCheck } from './cardCvcCheck';
import { CardFunding } from './cardFunding';
import { CardTokenizationMethod } from './cardTokenizationMethod';
import { CashCashBalance } from './cashCashBalance';
import { ChargeCharge } from './chargeCharge';
import { ChargeStatus } from './chargeStatus';
import { CheckoutBillingAddressCollection } from './checkoutBillingAddressCollection';
import { CheckoutCheckoutSession } from './checkoutCheckoutSession';
import { CheckoutCustomerCreation } from './checkoutCustomerCreation';
import { CheckoutLocale } from './checkoutLocale';
import { CheckoutMode } from './checkoutMode';
import { CheckoutPaymentMethodCollection } from './checkoutPaymentMethodCollection';
import { CheckoutPaymentStatus } from './checkoutPaymentStatus';
import { CheckoutStatus } from './checkoutStatus';
import { CheckoutSubmitType } from './checkoutSubmitType';
import { CouponCoupon } from './couponCoupon';
import { CouponDuration } from './couponDuration';
import { CreditCreditNote } from './creditCreditNote';
import { CreditType } from './creditType';
import { CustomerCustomer } from './customerCustomer';
import { CustomerTaxExempt } from './customerTaxExempt';
import { DatabaseDeletedAt } from './databaseDeletedAt';
import { DiscountDiscount } from './discountDiscount';
import { DisputeDispute } from './disputeDispute';
import { DisputeReason } from './disputeReason';
import { DisputeStatus } from './disputeStatus';
import { FileFile } from './fileFile';
import { FilePurpose } from './filePurpose';
import { GithubComDriver005GatewayInternalIntentCancellationReason } from './githubComDriver005GatewayInternalIntentCancellationReason';
import { GithubComDriver005GatewayInternalIntentStatus } from './githubComDriver005GatewayInternalIntentStatus';
import { GithubComDriver005GatewayInternalSetupIntentCancellationReason } from './githubComDriver005GatewayInternalSetupIntentCancellationReason';
import { GithubComDriver005GatewayInternalSetupIntentStatus } from './githubComDriver005GatewayInternalSetupIntentStatus';
import { GithubComDriver005GatewayPaymentCardCard } from './githubComDriver005GatewayPaymentCardCard';
import { IntentCaptureMethod } from './intentCaptureMethod';
import { IntentConfirmationMethod } from './intentConfirmationMethod';
import { IntentPaymentIntent } from './intentPaymentIntent';
import { IntentSetupFutureUsage } from './intentSetupFutureUsage';
import { IntentSetupIntent } from './intentSetupIntent';
import { IntentUsage } from './intentUsage';
import { InvoiceBillingReason } from './invoiceBillingReason';
import { InvoiceCollectionMethod } from './invoiceCollectionMethod';
import { InvoiceInvoice } from './invoiceInvoice';
import { InvoiceItemInvoiceitem } from './invoiceItemInvoiceitem';
import { InvoiceStatus } from './invoiceStatus';
import { ItemLineItem } from './itemLineItem';
import { LinkPaymentLink } from './linkPaymentLink';
import { MandateMandate } from './mandateMandate';
import { MandateStatus } from './mandateStatus';
import { MandateType } from './mandateType';
import { MethodPaymentMethod } from './methodPaymentMethod';
import { MethodType } from './methodType';
import { PayoutMethod } from './payoutMethod';
import { PayoutPayout } from './payoutPayout';
import { PayoutSourceType } from './payoutSourceType';
import { PayoutStatus } from './payoutStatus';
import { PayoutType } from './payoutType';
import { PlanPlan } from './planPlan';
import { PriceBillingScheme } from './priceBillingScheme';
import { PricePrice } from './pricePrice';
import { PriceTaxBehavior } from './priceTaxBehavior';
import { PriceTiersMode } from './priceTiersMode';
import { PriceType } from './priceType';
import { ProductProduct } from './productProduct';
import { PromotionPromotionCode } from './promotionPromotionCode';
import { QuoteQuote } from './quoteQuote';
import { RefundFailureReason } from './refundFailureReason';
import { RefundReason } from './refundReason';
import { RefundRefund } from './refundRefund';
import { RefundStatus } from './refundStatus';
import { SourceFlow } from './sourceFlow';
import { SourceSource } from './sourceSource';
import { SourceStatus } from './sourceStatus';
import { SourceType } from './sourceType';
import { SourceUsage } from './sourceUsage';
import { SubscriptionItemSubscriptionItem } from './subscriptionItemSubscriptionItem';
import { SubscriptionScheduleSubscriptionSchedule } from './subscriptionScheduleSubscriptionSchedule';
import { SubscriptionSubscription } from './subscriptionSubscription';
import { UsageRecordUsageRecord } from './usageRecordUsageRecord';
import { UuidNullUUID } from './uuidNullUUID';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AttemptStatus": AttemptStatus,
        "AttemptUsage": AttemptUsage,
        "BalanceStatus": BalanceStatus,
        "BalanceType": BalanceType,
        "BankAccountHolderType": BankAccountHolderType,
        "BankAccountType": BankAccountType,
        "BankStatus": BankStatus,
        "CardAddressLine1Check": CardAddressLine1Check,
        "CardAddressZipCheck": CardAddressZipCheck,
        "CardBrand": CardBrand,
        "CardCvcCheck": CardCvcCheck,
        "CardFunding": CardFunding,
        "CardTokenizationMethod": CardTokenizationMethod,
        "ChargeStatus": ChargeStatus,
        "CheckoutBillingAddressCollection": CheckoutBillingAddressCollection,
        "CheckoutCustomerCreation": CheckoutCustomerCreation,
        "CheckoutLocale": CheckoutLocale,
        "CheckoutMode": CheckoutMode,
        "CheckoutPaymentMethodCollection": CheckoutPaymentMethodCollection,
        "CheckoutPaymentStatus": CheckoutPaymentStatus,
        "CheckoutStatus": CheckoutStatus,
        "CheckoutSubmitType": CheckoutSubmitType,
        "CouponDuration": CouponDuration,
        "CreditType": CreditType,
        "CustomerTaxExempt": CustomerTaxExempt,
        "DisputeReason": DisputeReason,
        "DisputeStatus": DisputeStatus,
        "FilePurpose": FilePurpose,
        "GithubComDriver005GatewayInternalIntentCancellationReason": GithubComDriver005GatewayInternalIntentCancellationReason,
        "GithubComDriver005GatewayInternalIntentStatus": GithubComDriver005GatewayInternalIntentStatus,
        "GithubComDriver005GatewayInternalSetupIntentCancellationReason": GithubComDriver005GatewayInternalSetupIntentCancellationReason,
        "GithubComDriver005GatewayInternalSetupIntentStatus": GithubComDriver005GatewayInternalSetupIntentStatus,
        "IntentCaptureMethod": IntentCaptureMethod,
        "IntentConfirmationMethod": IntentConfirmationMethod,
        "IntentSetupFutureUsage": IntentSetupFutureUsage,
        "IntentUsage": IntentUsage,
        "InvoiceBillingReason": InvoiceBillingReason,
        "InvoiceCollectionMethod": InvoiceCollectionMethod,
        "InvoiceStatus": InvoiceStatus,
        "MandateStatus": MandateStatus,
        "MandateType": MandateType,
        "MethodType": MethodType,
        "PayoutMethod": PayoutMethod,
        "PayoutSourceType": PayoutSourceType,
        "PayoutStatus": PayoutStatus,
        "PayoutType": PayoutType,
        "PriceBillingScheme": PriceBillingScheme,
        "PriceTaxBehavior": PriceTaxBehavior,
        "PriceTiersMode": PriceTiersMode,
        "PriceType": PriceType,
        "RefundFailureReason": RefundFailureReason,
        "RefundReason": RefundReason,
        "RefundStatus": RefundStatus,
        "SourceFlow": SourceFlow,
        "SourceStatus": SourceStatus,
        "SourceType": SourceType,
        "SourceUsage": SourceUsage,
}

let typeMap: {[index: string]: any} = {
    "AccountAccount": AccountAccount,
    "AttemptSetupAttempt": AttemptSetupAttempt,
    "BalanceBalance": BalanceBalance,
    "BalanceBalanceTransaction": BalanceBalanceTransaction,
    "BankBankAccount": BankBankAccount,
    "CashCashBalance": CashCashBalance,
    "ChargeCharge": ChargeCharge,
    "CheckoutCheckoutSession": CheckoutCheckoutSession,
    "CouponCoupon": CouponCoupon,
    "CreditCreditNote": CreditCreditNote,
    "CustomerCustomer": CustomerCustomer,
    "DatabaseDeletedAt": DatabaseDeletedAt,
    "DiscountDiscount": DiscountDiscount,
    "DisputeDispute": DisputeDispute,
    "FileFile": FileFile,
    "GithubComDriver005GatewayPaymentCardCard": GithubComDriver005GatewayPaymentCardCard,
    "IntentPaymentIntent": IntentPaymentIntent,
    "IntentSetupIntent": IntentSetupIntent,
    "InvoiceInvoice": InvoiceInvoice,
    "InvoiceItemInvoiceitem": InvoiceItemInvoiceitem,
    "ItemLineItem": ItemLineItem,
    "LinkPaymentLink": LinkPaymentLink,
    "MandateMandate": MandateMandate,
    "MethodPaymentMethod": MethodPaymentMethod,
    "PayoutPayout": PayoutPayout,
    "PlanPlan": PlanPlan,
    "PricePrice": PricePrice,
    "ProductProduct": ProductProduct,
    "PromotionPromotionCode": PromotionPromotionCode,
    "QuoteQuote": QuoteQuote,
    "RefundRefund": RefundRefund,
    "SourceSource": SourceSource,
    "SubscriptionItemSubscriptionItem": SubscriptionItemSubscriptionItem,
    "SubscriptionScheduleSubscriptionSchedule": SubscriptionScheduleSubscriptionSchedule,
    "SubscriptionSubscription": SubscriptionSubscription,
    "UsageRecordUsageRecord": UsageRecordUsageRecord,
    "UuidNullUUID": UuidNullUUID,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
