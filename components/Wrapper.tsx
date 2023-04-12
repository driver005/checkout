import React from 'react'

import {
    Afghanistan,
    AlandIslands,
    Albania,
    Algeria,
    Andorra,
    Angola,
    Anguilla,
    AntiguaBarbuda,
    Argentina,
    Armenia,
    Aruba,
    Australia,
    Austria,
    Azerbaijan,
    Bahamas,
    Bahrain,
    Bangladesh,
    Barbados,
    Belarus,
    Belgium,
    Belize,
    Benin,
    Bermuda,
    Bhutan,
    Bolivia,
    BosniaHerzegovina,
    Botswana,
    BouvetIsland,
    Brazil,
    BritishIndianOceanTerritory,
    BritishVirginIslands,
    Brunei,
    Bulgaria,
    BurkinaFaso,
    Burundi,
    Cambodia,
    Cameroon,
    Canada,
    CapeVerde,
    CaribbeanNetherlands,
    CaymanIslands,
    CentralAfricanRepublic,
    Chad,
    Chile,
    China,
    Colombia,
    Comoros,
    CongoBrazzaville,
    CongoKinshasa,
    CookIslands,
    CostaRica,
    CotedIvoire,
    Croatia,
    Curacao,
    Cyprus,
    Czechia,
    Denmark,
    Djibouti,
    Dominica,
    DominicanRepublic,
    Ecuador,
    Egypt,
    ElSalvador,
    EquatorialGuinea,
    Eritrea,
    Estonia,
    Eswatini,
    Ethiopia,
    FalklandIslands,
    FaroeIslands,
    Fiji,
    Finland,
    France,
    FrenchGuiana,
    FrenchPolynesia,
    FrenchSouthernTerritories,
    Gabon,
    Gambia,
    Georgia,
    Germany,
    Ghana,
    Gibraltar,
    Greece,
    Greenland,
    Grenada,
    Guadeloupe,
    Guam,
    Guatemala,
    Guernsey,
    Guinea,
    GuineaBissau,
    Guyana,
    Haiti,
    Honduras,
    HongKong,
    Hungary,
    Iceland,
    India,
    Indonesia,
    Iraq,
    Ireland,
    IsleofMan,
    Israel,
    Italy,
    Jamaica,
    Japan,
    Jersey,
    Jordan,
    Kazakhstan,
    Kenya,
    Kiribati,
    Kosovo,
    Kuwait,
    Kyrgyzstan,
    Laos,
    Latvia,
    Lebanon,
    Lesotho,
    Liberia,
    Libya,
    Liechtenstein,
    Lithuania,
    Luxembourg,
    Madagascar,
    Malawi,
    Malaysia,
    Maldives,
    Mali,
    Malta,
    Martinique,
    Mauritania,
    Mauritius,
    Mayotte,
    Mexico,
    Moldova,
    Monaco,
    Mongolia,
    Montenegro,
    Montserrat,
    Morocco,
    Mozambique,
    Myanmar,
    Namibia,
    Nauru,
    Nepal,
    Netherlands,
    NewCaledonia,
    NewZealand,
    Nicaragua,
    Niger,
    Nigeria,
    Niue,
    NorthMacedonia,
    Norway,
    Oman,
    Pakistan,
    Panama,
    PapuaNewGuinea,
    Paraguay,
    Peru,
    Philippines,
    PitcairnIslands,
    Poland,
    Portugal,
    PuertoRico,
    Qatar,
    Reunion,
    Romania,
    Russia,
    Rwanda,
    Samoa,
    SanMarino,
    SaoTomePrincipe,
    SaudiArabia,
    Senegal,
    Serbia,
    Seychelles,
    SierraLeone,
    Singapore,
    SintMaarten,
    Slovakia,
    Slovenia,
    SolomonIslands,
    Somalia,
    SouthAfrica,
    SouthGeorgiaSouthSandwichIslands,
    SouthKorea,
    SouthSudan,
    Spain,
    SriLanka,
    StBarthelemy,
    StHelena,
    StKittsNevis,
    StLucia,
    StMartin,
    StPierreMiquelon,
    StVincentGrenadines,
    Suriname,
    SvalbardJanMayen,
    Sweden,
    Switzerland,
    Taiwan,
    Tajikistan,
    Tanzania,
    Thailand,
    TimorLeste,
    Togo,
    Tokelau,
    Tonga,
    TrinidadTobago,
    TristandaCunha,
    Tunisia,
    Turkey,
    Turkmenistan,
    TurksCaicosIslands,
    Tuvalu,
    Uganda,
    Ukraine,
    UnitedArabEmirates,
    UnitedKingdom,
    UnitedStates,
    Uruguay,
    Uzbekistan,
    Vanuatu,
    VaticanCity,
    Venezuela,
    Vietnam,
    WallisFutuna,
    Yemen,
    Zambia,
    Zimbabwe,
} from 'address'
import { Control, FieldValues } from 'react-hook-form';

interface WrapperProps {
    country: string;
    control: Control<FieldValues>;
    error: any;
}

export const Wrapper: React.FC<WrapperProps> = ({ country, control, error }) => (
    <React.Fragment>
        {country === "Afghanistan" && <Afghanistan control={control} error={error} />}
        {country === "Åland Islands" && <AlandIslands control={control} error={error} />}
        {country === "Albania" && <Albania control={control} error={error} />}
        {country === "Algeria" && <Algeria control={control} error={error} />}
        {country === "Andorra" && <Andorra control={control} error={error} />}
        {country === "Angola" && <Angola control={control} error={error} />}
        {country === "Anguilla" && <Anguilla control={control} error={error} />}
        {country === "Antigua & Barbuda" && <AntiguaBarbuda control={control} error={error} />}
        {country === "Argentina" && <Argentina control={control} error={error} />}
        {country === "Armenia" && <Armenia control={control} error={error} />}
        {country === "Aruba" && <Aruba control={control} error={error} />}
        {country === "Australia" && <Australia control={control} error={error} />}
        {country === "Austria" && <Austria control={control} error={error} />}
        {country === "Azerbaijan" && <Azerbaijan control={control} error={error} />}
        {country === "Bahamas" && <Bahamas control={control} error={error} />}
        {country === "Bahrain" && <Bahrain control={control} error={error} />}
        {country === "Bangladesh" && <Bangladesh control={control} error={error} />}
        {country === "Barbados" && <Barbados control={control} error={error} />}
        {country === "Belarus" && <Belarus control={control} error={error} />}
        {country === "Belgium" && <Belgium control={control} error={error} />}
        {country === "Belize" && <Belize control={control} error={error} />}
        {country === "Benin" && <Benin control={control} error={error} />}
        {country === "Bermuda" && <Bermuda control={control} error={error} />}
        {country === "Bhutan" && <Bhutan control={control} error={error} />}
        {country === "Bolivia" && <Bolivia control={control} error={error} />}
        {country === "Bosnia & Herzegovina" && <BosniaHerzegovina control={control} error={error} />}
        {country === "Botswana" && <Botswana control={control} error={error} />}
        {country === "Bouvet Island" && <BouvetIsland control={control} error={error} />}
        {country === "Brazil" && <Brazil control={control} error={error} />}
        {country === "British Indian Ocean Territory" && <BritishIndianOceanTerritory control={control} error={error} />}
        {country === "British Virgin Islands" && <BritishVirginIslands control={control} error={error} />}
        {country === "Brunei" && <Brunei control={control} error={error} />}
        {country === "Bulgaria" && <Bulgaria control={control} error={error} />}
        {country === "Burkina Faso" && <BurkinaFaso control={control} error={error} />}
        {country === "Burundi" && <Burundi control={control} error={error} />}
        {country === "Cambodia" && <Cambodia control={control} error={error} />}
        {country === "Cameroon" && <Cameroon control={control} error={error} />}
        {country === "Canada" && <Canada control={control} error={error} />}
        {country === "Cape Verde" && <CapeVerde control={control} error={error} />}
        {country === "Caribbean Netherlands" && <CaribbeanNetherlands control={control} error={error} />}
        {country === "Cayman Islands" && <CaymanIslands control={control} error={error} />}
        {country === "Central African Republic" && <CentralAfricanRepublic control={control} error={error} />}
        {country === "Chad" && <Chad control={control} error={error} />}
        {country === "Chile" && <Chile control={control} error={error} />}
        {country === "China" && <China control={control} error={error} />}
        {country === "Colombia" && <Colombia control={control} error={error} />}
        {country === "Comoros" && <Comoros control={control} error={error} />}
        {country === "Congo - Brazzaville" && <CongoBrazzaville control={control} error={error} />}
        {country === "Congo - Kinshasa" && <CongoKinshasa control={control} error={error} />}
        {country === "Cook Islands" && <CookIslands control={control} error={error} />}
        {country === "Costa Rica" && <CostaRica control={control} error={error} />}
        {country === "Côte d’Ivoire" && <CotedIvoire control={control} error={error} />}
        {country === "Croatia" && <Croatia control={control} error={error} />}
        {country === "Curaçao" && <Curacao control={control} error={error} />}
        {country === "Cyprus" && <Cyprus control={control} error={error} />}
        {country === "Czechia" && <Czechia control={control} error={error} />}
        {country === "Denmark" && <Denmark control={control} error={error} />}
        {country === "Djibouti" && <Djibouti control={control} error={error} />}
        {country === "Dominica" && <Dominica control={control} error={error} />}
        {country === "Dominican Republic" && <DominicanRepublic control={control} error={error} />}
        {country === "Ecuador" && <Ecuador control={control} error={error} />}
        {country === "Egypt" && <Egypt control={control} error={error} />}
        {country === "El Salvador" && <ElSalvador control={control} error={error} />}
        {country === "Equatorial Guinea" && <EquatorialGuinea control={control} error={error} />}
        {country === "Eritrea" && <Eritrea control={control} error={error} />}
        {country === "Estonia" && <Estonia control={control} error={error} />}
        {country === "Eswatini" && <Eswatini control={control} error={error} />}
        {country === "Ethiopia" && <Ethiopia control={control} error={error} />}
        {country === "Falkland Islands" && <FalklandIslands control={control} error={error} />}
        {country === "Faroe Islands" && <FaroeIslands control={control} error={error} />}
        {country === "Fiji" && <Fiji control={control} error={error} />}
        {country === "Finland" && <Finland control={control} error={error} />}
        {country === "France" && <France control={control} error={error} />}
        {country === "French Guiana" && <FrenchGuiana control={control} error={error} />}
        {country === "French Polynesia" && <FrenchPolynesia control={control} error={error} />}
        {country === "French Southern Territories" && <FrenchSouthernTerritories control={control} error={error} />}
        {country === "Gabon" && <Gabon control={control} error={error} />}
        {country === "Gambia" && <Gambia control={control} error={error} />}
        {country === "Georgia" && <Georgia control={control} error={error} />}
        {country === "Germany" && <Germany control={control} error={error} />}
        {country === "Ghana" && <Ghana control={control} error={error} />}
        {country === "Gibraltar" && <Gibraltar control={control} error={error} />}
        {country === "Greece" && <Greece control={control} error={error} />}
        {country === "Greenland" && <Greenland control={control} error={error} />}
        {country === "Grenada" && <Grenada control={control} error={error} />}
        {country === "Guadeloupe" && <Guadeloupe control={control} error={error} />}
        {country === "Guam" && <Guam control={control} error={error} />}
        {country === "Guatemala" && <Guatemala control={control} error={error} />}
        {country === "Guernsey" && <Guernsey control={control} error={error} />}
        {country === "Guinea" && <Guinea control={control} error={error} />}
        {country === "Guinea-Bissau" && <GuineaBissau control={control} error={error} />}
        {country === "Guyana" && <Guyana control={control} error={error} />}
        {country === "Haiti" && <Haiti control={control} error={error} />}
        {country === "Honduras" && <Honduras control={control} error={error} />}
        {country === "Hong Kong SAR China" && <HongKong control={control} error={error} />}
        {country === "Hungary" && <Hungary control={control} error={error} />}
        {country === "Iceland" && <Iceland control={control} error={error} />}
        {country === "India" && <India control={control} error={error} />}
        {country === "Indonesia" && <Indonesia control={control} error={error} />}
        {country === "Iraq" && <Iraq control={control} error={error} />}
        {country === "Ireland" && <Ireland control={control} error={error} />}
        {country === "Isle of Man" && <IsleofMan control={control} error={error} />}
        {country === "Israel" && <Israel control={control} error={error} />}
        {country === "Italy" && <Italy control={control} error={error} />}
        {country === "Jamaica" && <Jamaica control={control} error={error} />}
        {country === "Japan" && <Japan control={control} error={error} />}
        {country === "Jersey" && <Jersey control={control} error={error} />}
        {country === "Jordan" && <Jordan control={control} error={error} />}
        {country === "Kazakhstan" && <Kazakhstan control={control} error={error} />}
        {country === "Kenya" && <Kenya control={control} error={error} />}
        {country === "Kiribati" && <Kiribati control={control} error={error} />}
        {country === "Kosovo" && <Kosovo control={control} error={error} />}
        {country === "Kuwait" && <Kuwait control={control} error={error} />}
        {country === "Kyrgyzstan" && <Kyrgyzstan control={control} error={error} />}
        {country === "Laos" && <Laos control={control} error={error} />}
        {country === "Latvia" && <Latvia control={control} error={error} />}
        {country === "Lebanon" && <Lebanon control={control} error={error} />}
        {country === "Lesotho" && <Lesotho control={control} error={error} />}
        {country === "Liberia" && <Liberia control={control} error={error} />}
        {country === "Libya" && <Libya control={control} error={error} />}
        {country === "Liechtenstein" && <Liechtenstein control={control} error={error} />}
        {country === "Lithuania" && <Lithuania control={control} error={error} />}
        {country === "Luxembourg" && <Luxembourg control={control} error={error} />}
        {country === "Madagascar" && <Madagascar control={control} error={error} />}
        {country === "Malawi" && <Malawi control={control} error={error} />}
        {country === "Malaysia" && <Malaysia control={control} error={error} />}
        {country === "Maldives" && <Maldives control={control} error={error} />}
        {country === "Mali" && <Mali control={control} error={error} />}
        {country === "Malta" && <Malta control={control} error={error} />}
        {country === "Martinique" && <Martinique control={control} error={error} />}
        {country === "Mauritania" && <Mauritania control={control} error={error} />}
        {country === "Mauritius" && <Mauritius control={control} error={error} />}
        {country === "Mayotte" && <Mayotte control={control} error={error} />}
        {country === "Mexico" && <Mexico control={control} error={error} />}
        {country === "Moldova" && <Moldova control={control} error={error} />}
        {country === "Monaco" && <Monaco control={control} error={error} />}
        {country === "Mongolia" && <Mongolia control={control} error={error} />}
        {country === "Montenegro" && <Montenegro control={control} error={error} />}
        {country === "Montserrat" && <Montserrat control={control} error={error} />}
        {country === "Morocco" && <Morocco control={control} error={error} />}
        {country === "Mozambique" && <Mozambique control={control} error={error} />}
        {country === "Myanmar (Burma)" && <Myanmar control={control} error={error} />}
        {country === "Namibia" && <Namibia control={control} error={error} />}
        {country === "Nauru" && <Nauru control={control} error={error} />}
        {country === "Nepal" && <Nepal control={control} error={error} />}
        {country === "Netherlands" && <Netherlands control={control} error={error} />}
        {country === "New Caledonia" && <NewCaledonia control={control} error={error} />}
        {country === "New Zealand" && <NewZealand control={control} error={error} />}
        {country === "Nicaragua" && <Nicaragua control={control} error={error} />}
        {country === "Niger" && <Niger control={control} error={error} />}
        {country === "Nigeria" && <Nigeria control={control} error={error} />}
        {country === "Niue" && <Niue control={control} error={error} />}
        {country === "North Macedonia" && <NorthMacedonia control={control} error={error} />}
        {country === "Norway" && <Norway control={control} error={error} />}
        {country === "Oman" && <Oman control={control} error={error} />}
        {country === "Pakistan" && <Pakistan control={control} error={error} />}
        {country === "Panama" && <Panama control={control} error={error} />}
        {country === "Papua New Guinea" && <PapuaNewGuinea control={control} error={error} />}
        {country === "Paraguay" && <Paraguay control={control} error={error} />}
        {country === "Peru" && <Peru control={control} error={error} />}
        {country === "Philippines" && <Philippines control={control} error={error} />}
        {country === "Pitcairn Islands" && <PitcairnIslands control={control} error={error} />}
        {country === "Poland" && <Poland control={control} error={error} />}
        {country === "Portugal" && <Portugal control={control} error={error} />}
        {country === "Puerto Rico" && <PuertoRico control={control} error={error} />}
        {country === "Qatar" && <Qatar control={control} error={error} />}
        {country === "Réunion" && <Reunion control={control} error={error} />}
        {country === "Romania" && <Romania control={control} error={error} />}
        {country === "Russia" && <Russia control={control} error={error} />}
        {country === "Rwanda" && <Rwanda control={control} error={error} />}
        {country === "Samoa" && <Samoa control={control} error={error} />}
        {country === "San Marino" && <SanMarino control={control} error={error} />}
        {country === "São Tomé & Príncipe" && <SaoTomePrincipe control={control} error={error} />}
        {country === "Saudi Arabia" && <SaudiArabia control={control} error={error} />}
        {country === "Senegal" && <Senegal control={control} error={error} />}
        {country === "Serbia" && <Serbia control={control} error={error} />}
        {country === "Seychelles" && <Seychelles control={control} error={error} />}
        {country === "Sierra Leone" && <SierraLeone control={control} error={error} />}
        {country === "Singapore" && <Singapore control={control} error={error} />}
        {country === "Sint Maarten" && <SintMaarten control={control} error={error} />}
        {country === "Slovakia" && <Slovakia control={control} error={error} />}
        {country === "Slovenia" && <Slovenia control={control} error={error} />}
        {country === "Solomon Islands" && <SolomonIslands control={control} error={error} />}
        {country === "Somalia" && <Somalia control={control} error={error} />}
        {country === "South Africa" && <SouthAfrica control={control} error={error} />}
        {country === "South Georgia & South Sandwich Islands" && <SouthGeorgiaSouthSandwichIslands control={control} error={error} />}
        {country === "South Korea" && <SouthKorea control={control} error={error} />}
        {country === "South Sudan" && <SouthSudan control={control} error={error} />}
        {country === "Spain" && <Spain control={control} error={error} />}
        {country === "Sri Lanka" && <SriLanka control={control} error={error} />}
        {country === "St. Barthélemy" && <StBarthelemy control={control} error={error} />}
        {country === "St. Helena" && <StHelena control={control} error={error} />}
        {country === "St. Kitts & Nevis" && <StKittsNevis control={control} error={error} />}
        {country === "St. Lucia" && <StLucia control={control} error={error} />}
        {country === "St. Martin" && <StMartin control={control} error={error} />}
        {country === "St. Pierre & Miquelon" && <StPierreMiquelon control={control} error={error} />}
        {country === "St. Vincent & Grenadines" && <StVincentGrenadines control={control} error={error} />}
        {country === "Suriname" && <Suriname control={control} error={error} />}
        {country === "Svalbard & Jan Mayen" && <SvalbardJanMayen control={control} error={error} />}
        {country === "Sweden" && <Sweden control={control} error={error} />}
        {country === "Switzerland" && <Switzerland control={control} error={error} />}
        {country === "Taiwan" && <Taiwan control={control} error={error} />}
        {country === "Tajikistan" && <Tajikistan control={control} error={error} />}
        {country === "Tanzania" && <Tanzania control={control} error={error} />}
        {country === "Thailand" && <Thailand control={control} error={error} />}
        {country === "Timor-Leste" && <TimorLeste control={control} error={error} />}
        {country === "Togo" && <Togo control={control} error={error} />}
        {country === "Tokelau" && <Tokelau control={control} error={error} />}
        {country === "Tonga" && <Tonga control={control} error={error} />}
        {country === "Trinidad & Tobago" && <TrinidadTobago control={control} error={error} />}
        {country === "Tristan da Cunha" && <TristandaCunha control={control} error={error} />}
        {country === "Tunisia" && <Tunisia control={control} error={error} />}
        {country === "Turkey" && <Turkey control={control} error={error} />}
        {country === "Turkmenistan" && <Turkmenistan control={control} error={error} />}
        {country === "Turks & Caicos Islands" && <TurksCaicosIslands control={control} error={error} />}
        {country === "Tuvalu" && <Tuvalu control={control} error={error} />}
        {country === "Uganda" && <Uganda control={control} error={error} />}
        {country === "Ukraine" && <Ukraine control={control} error={error} />}
        {country === "United Arab Emirates" && <UnitedArabEmirates control={control} error={error} />}
        {country === "United Kingdom" && <UnitedKingdom control={control} error={error} />}
        {country === "United States" && <UnitedStates control={control} error={error} />}
        {country === "Uruguay" && <Uruguay control={control} error={error} />}
        {country === "Uzbekistan" && <Uzbekistan control={control} error={error} />}
        {country === "Vanuatu" && <Vanuatu control={control} error={error} />}
        {country === "Vatican City" && <VaticanCity control={control} error={error} />}
        {country === "Venezuela" && <Venezuela control={control} error={error} />}
        {country === "Vietnam" && <Vietnam control={control} error={error} />}
        {country === "Wallis & Futuna" && <WallisFutuna control={control} error={error} />}
        {country === "Yemen" && <Yemen control={control} error={error} />}
        {country === "Zambia" && <Zambia control={control} error={error} />}
        {country === "Zimbabwe" && <Zimbabwe control={control} error={error} />}
    </React.Fragment>
)