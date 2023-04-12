/**
 * Fiber Swagger Example API
 * This is a sample server server.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export enum MethodType {
    TypeAcssDebit = <any> 'acss_debit',
    TypeAffirm = <any> 'affirm',
    TypeAfterpayClearpay = <any> 'afterpay_clearpay',
    TypeAlipay = <any> 'alipay',
    TypeAuBecsDebit = <any> 'au_becs_debit',
    TypeBacsDebit = <any> 'bacs_debit',
    TypeBancontact = <any> 'bancontact',
    TypeBlik = <any> 'blik',
    TypeBoleto = <any> 'boleto',
    TypeBtcpay = <any> 'btcpay',
    TypeCard = <any> 'card',
    TypeCardPresent = <any> 'card_present',
    TypeCustomerBalance = <any> 'customer_balance',
    TypeEps = <any> 'eps',
    TypeFpx = <any> 'fpx',
    TypeGiropay = <any> 'giropay',
    TypeGrabpay = <any> 'grabpay',
    TypeIdeal = <any> 'ideal',
    TypeInteracPresent = <any> 'interac_present',
    TypeKlarna = <any> 'klarna',
    TypeKonbini = <any> 'konbini',
    TypeLink = <any> 'link',
    TypeOxxo = <any> 'oxxo',
    TypeP24 = <any> 'p24',
    TypePaynow = <any> 'paynow',
    TypePix = <any> 'pix',
    TypePromptpay = <any> 'promptpay',
    TypeSepaDebit = <any> 'sepa_debit',
    TypeSofort = <any> 'sofort',
    TypeUsBankAccount = <any> 'us_bank_account',
    TypeWechatPay = <any> 'wechat_pay'
}
