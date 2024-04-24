import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Input, Heading, CheckBox } from "../../components";

const data = [
  { integrateand: "Integrate and generate unique account number for your users" },
  { integrateand: "Enable your customers to fund their wallet on your platform seamlessly" },
];

export default function LeverpayLandingpagePage() {
  return (
    <>
      <Helmet>
        <title>Online Payment Solutions - Unlock Business Success with Leverpay</title>
        <meta
          name="description"
          content="Leverpay offers a comprehensive online payment solution tailored for startups. Enjoy features like instant remittance, international gateway, and 24/7 support to elevate your business. Try now!"
        />
      </Helmet>

      {/* main content section */}
      <div className="w-full bg-white-A700_01">
        {/* header section */}
        <div>
          {/* hero section */}
          <div className="relative h-[1669px] md:h-auto">
            <div className="w-full">
              <div className="flex flex-col items-center rounded-tl-[50px] rounded-tr-[50px] bg-gray-900_02 py-[57px] md:py-5">
                <div className="container-sm mb-[22px] flex flex-col items-center gap-[132px] px-8 md:gap-[99px] md:p-5 sm:gap-[66px] sm:px-5">
                  <header className="flex w-[96%] items-center justify-between gap-5 md:w-full md:flex-col">
                    <Img src="images/img_header_logo.svg" alt="headerlogo_one" className="h-[33px] w-[18%] md:w-full" />
                    <div className="flex items-center gap-[18px] md:flex-col">
                      <div className="flex items-center gap-2.5 md:flex-col">
                        <Button
                          size="md"
                          className="min-w-[100px] rounded-[28px] font-medium uppercase tracking-[3.20px] sm:px-5"
                        >
                          Home
                        </Button>
                        <ul className="flex flex-wrap gap-[30px]">
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-medium uppercase tracking-[3.20px]">
                                FEATURES
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-medium uppercase tracking-[3.20px]">
                                PRICING
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-medium uppercase tracking-[3.20px]">
                                REVIEWS
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-medium uppercase tracking-[3.20px]">
                                API
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-medium uppercase tracking-[3.20px]">
                                SCREENSHOT
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <Button
                        color="amber_700"
                        size="2xl"
                        shape="round"
                        className="min-w-[206px] font-bold uppercase tracking-[3.20px]"
                      >
                        MERCHANT LOGIN
                      </Button>
                    </div>
                  </header>
                  <div className="flex w-[96%] flex-col items-start rounded-[50px] bg-indigo-900_02 p-[46px] md:w-full md:p-5">
                    <Heading size="4xl" as="h1" className="relative z-[1] mt-[63px] w-[44%] md:w-full">
                      <span className="text-white-A700_01">Your Best&nbsp;</span>
                      <span className="text-[64px] text-amber-700">
                        <>
                          Online
                          <br />
                          Payment Solution.
                        </>
                      </span>
                    </Heading>
                    <Heading size="xl" as="h2" className="relative mt-[-3px] w-[35%] italic md:w-full">
                      <>
                        Unlocking Endless Possibilities for <br />
                        your Business Success
                      </>
                    </Heading>
                    <Heading size="xl" as="h3" className="mt-[89px] italic">
                      Download Now!
                    </Heading>
                    <Img
                      src="images/img_googleplayblack_d41454d7_png.png"
                      alt="googleplayblack"
                      className="mb-[72px] h-[63px] w-[21%] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* why leverpay section */}
              <div className="flex justify-center bg-gray-900_06 py-[66px] md:py-5">
                <div className="container-sm mb-[104px] mt-[123px] flex px-[52px] md:p-5 md:px-5">
                  <div className="flex w-[70%] flex-col items-start gap-7 md:w-full">
                    <Heading as="h4" className="ml-[140px] md:ml-0">
                      Why Leverpay?
                    </Heading>
                    <div className="relative h-[268px] self-stretch">
                      <Img
                        src="images/img_rectangle_41.svg"
                        alt="image"
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[268px] w-full rounded-[20px]"
                      />
                      <Text
                        size="md"
                        as="p"
                        className="absolute bottom-0 right-[0.00px] top-0 my-auto h-max w-[95%] italic"
                      >
                        <span className="font-semibold text-white-A700_01">
                          <>
                            At Leverpay, we understand the challenges startups face, and that&#39;s why we&#39;ve
                            crafted the perfect payment solution for you. Our easy integration, instant remittance, and
                            a range of features cater specifically to your business needs.
                            <br />
                          </>
                        </span>
                        <span className="text-white-A700_01">
                          <>
                            <br />
                          </>
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_imockup_google.png"
              alt="imockupgoogle"
              className="absolute right-[26.00px] top-[16%] m-auto h-[736px] w-[50%] object-cover"
            />
          </div>

          {/* features section */}
          <div className="flex flex-col items-center bg-gray-900 py-[62px] md:py-5">
            <div className="container-sm mb-[25px] flex flex-col items-center gap-[43px] px-[82px] md:p-5 md:px-5">
              <Heading as="h2">Our Features</Heading>
              <Heading as="h3" className="ml-[49px] self-start !font-semibold md:ml-0">
                Payment Solutions
              </Heading>
              <div className="flex w-[97%] gap-[82px] md:w-full md:flex-col">
                <div className="relative h-[761px] flex-1 md:w-full md:flex-none">
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[97%] flex-col items-center gap-[34px] rounded-[50px] bg-indigo-900_01 p-[30px] sm:p-5">
                    <div className="w-[27%] rounded-[58px] bg-gray-900_03 p-[19px] md:w-full">
                      <Img src="images/img_user.svg" alt="user_one" className="my-[11px] h-[55px] w-full md:h-auto" />
                    </div>
                    <Text size="lg" as="p" className="!text-amber-600">
                      Transactions
                    </Text>
                    <div className="mb-[386px] flex flex-col items-start gap-2.5">
                      <div className="flex items-center gap-[7px] sm:flex-col">
                        <Img
                          src="images/img_material_symbols_check.svg"
                          alt="image"
                          className="h-[28px] w-[28px] sm:w-full"
                        />
                        <Text size="md" as="p">
                          International payment gateway{" "}
                        </Text>
                      </div>
                      <div className="flex items-center gap-[7px]">
                        <Img
                          src="images/img_material_symbols_check.svg"
                          alt="image_one"
                          className="h-[28px] w-[28px]"
                        />
                        <Text size="md" as="p">
                          Local payment gateway{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    shape="circle"
                    className="absolute bottom-[0.00px] right-[0.00px] m-auto w-[114px] rotate-[90deg] !rounded-[57px]"
                  >
                    <Img src="images/img_icon_outlined.svg" />
                  </Button>
                  <Img
                    src="images/img_remittance_or_international.png"
                    alt="image_two"
                    className="absolute bottom-[8%] left-0 right-0 m-auto h-[371px] w-[371px] object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center gap-9 rounded-[50px] bg-indigo-900_01 p-[30px] sm:p-5">
                  <Img src="images/img_group_1000004610.svg" alt="image" className="h-[116px] w-[116px]" />
                  <Text size="lg" as="p" className="!text-amber-600">
                    Bills Payment
                  </Text>
                  <div className="mb-[18px] flex items-center justify-between gap-5 self-stretch sm:flex-col">
                    <div className="flex flex-col">
                      <Img src="images/img_material_symbols_check.svg" alt="material_one" className="h-[28px]" />
                      <Img
                        src="images/img_material_symbols_check.svg"
                        alt="material_three"
                        className="mt-3.5 h-[28px]"
                      />
                      <Img
                        src="images/img_material_symbols_check.svg"
                        alt="material_five"
                        className="mt-3.5 h-[28px]"
                      />
                      <Img src="images/img_material_symbols_check.svg" alt="material_seven" className="mt-2 h-[28px]" />
                      <Img
                        src="images/img_material_symbols_check.svg"
                        alt="material_nine"
                        className="mt-[54px] h-[28px]"
                      />
                      <Img
                        src="images/img_material_symbols_check.svg"
                        alt="material_eleven"
                        className="mt-[52px] h-[28px]"
                      />
                      <Img src="images/img_material_symbols_check.svg" alt="material" className="mt-3 h-[28px]" />
                      <Img src="images/img_material_symbols_check.svg" alt="material" className="mt-3 h-[28px]" />
                      <Img src="images/img_material_symbols_check.svg" alt="material" className="mt-3 h-[28px]" />
                    </div>
                    <Text size="md" as="p" className="w-[93%] leading-10 sm:w-full">
                      <>
                        Airtime
                        <br />
                        Data
                        <br />
                        Electricity <br />
                        Internet Subscriptions (Spectranet, Swift, Smile)
                        <br />
                        Cabletv (DSTV, GOTV, STARTIMES, SHOWMAX)
                        <br />
                        Betting
                        <br />
                        States Tax Payment
                        <br />
                        Transport Tickets (Cowry)
                        <br />
                        Airlines: flight tickets
                      </>
                    </Text>
                  </div>
                </div>
                <Button shape="circle" className="w-[114px] rotate-[90deg] !rounded-[57px]">
                  <Img src="images/img_icon_outlined.svg" />
                </Button>
              </div>
            </div>
          </div>

          {/* merchant integration section */}
          <div className="relative h-[2086px] md:h-auto">
            <div className="w-full">
              <div className="flex flex-col items-center gap-[86px] bg-gray-900_04 py-[54px] md:gap-16 md:py-5 sm:gap-[43px]">
                <div className="container-sm flex flex-col items-end pl-14 pr-[386px] md:p-5 md:px-5">
                  <Heading as="h2" className="w-[51%] text-center leading-[48px] md:w-full">
                    <>
                      Merchant Payment <br />
                      Integration |
                    </>
                  </Heading>
                </div>
                <div className="container-sm mb-10 grid grid-cols-2 justify-center gap-[30px] rounded-[50px] bg-gray-900_05 p-12 md:grid-cols-1 md:p-5">
                  <div className="flex w-full items-center gap-[133px] rounded-[10px] bg-indigo-900_01 p-4 md:flex-col md:gap-5">
                    <div className="relative my-[11px] h-[116px] w-[28%] md:my-0 md:h-auto md:w-full">
                      <Img
                        src="images/img_ellipse_6.svg"
                        alt="invoice_link"
                        className="h-[116px] w-[116px] rounded-[50%]"
                      />
                      <Img
                        src="images/img_basil_invoice_outline.svg"
                        alt="invoice_link"
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[80px] w-[80px]"
                      />
                    </div>
                    <Text size="md" as="p" className="mb-[41px] self-end md:mb-0">
                      Invoice link
                    </Text>
                  </div>
                  <div className="flex w-full items-center justify-between gap-5 rounded-[10px] bg-indigo-900_01 p-[17px] sm:flex-col">
                    <div className="my-2.5 w-[21%] rounded-[58px] bg-amber-600 p-[19px] sm:w-full sm:p-5">
                      <Img src="images/img_user.svg" alt="user_one" className="my-[11px] h-[55px] w-full md:h-auto" />
                    </div>
                    <Text size="md" as="p" className="mb-[31px] w-[65%] self-end sm:w-full">
                      Payment integration on merchant platform
                    </Text>
                  </div>
                  <div className="flex w-full items-center justify-between gap-5 rounded-[10px] bg-indigo-900_01 p-4 sm:flex-col">
                    <div className="relative my-[11px] h-[116px] w-[22%] md:h-auto sm:w-full">
                      <Img
                        src="images/img_ellipse_6.svg"
                        alt="circleimage"
                        className="h-[116px] w-[116px] rounded-[50%]"
                      />
                      <div className="absolute bottom-[6.00px] left-0 right-0 m-auto flex w-[57%] flex-col items-center">
                        <Img
                          src="images/img_crypto_transaction.png"
                          alt="crypto_one"
                          className="h-[66px] w-full object-cover md:h-auto"
                        />
                        <Img
                          src="images/img_naira.png"
                          alt="naira_one"
                          className="relative mt-[-16px] h-[39px] w-[39px] object-cover"
                        />
                      </div>
                    </div>
                    <Text size="md" as="p" className="mr-[27px] w-[53%] self-end md:mr-0 sm:w-full">
                      Crypto and Naira Checkout
                    </Text>
                  </div>
                  <div className="flex w-full rounded-[10px] bg-indigo-900_01 p-[9px]">
                    <div className="mb-2 mt-3 flex w-[61%] items-center justify-between gap-5 md:w-full">
                      <div className="relative h-[132px] w-[38%] md:h-auto">
                        <Img
                          src="images/img_ellipse_6.svg"
                          alt="circleimage"
                          className="mt-1.5 h-[116px] w-[116px] rounded-[50%]"
                        />
                        <Img
                          src="images/img_group_1000004405.svg"
                          alt="image"
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[132px] w-full"
                        />
                      </div>
                      <Text size="md" as="p">
                        Affiliate Split{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between gap-5 rounded-[10px] bg-indigo-900_01 p-4 sm:flex-col">
                    <div className="relative my-[11px] h-[116px] w-[25%] md:h-auto sm:w-full">
                      <Img
                        src="images/img_ellipse_6.svg"
                        alt="circleimage"
                        className="h-[116px] w-[116px] rounded-[50%]"
                      />
                      <Img
                        src="images/img_group_1000004406.svg"
                        alt="image"
                        className="absolute left-0 right-0 top-[3.00px] m-auto h-[104px] w-[93%]"
                      />
                    </div>
                    <Text size="md" as="p" className="mb-[41px] mr-[81px] self-end md:mr-0">
                      Dashboard metrics
                    </Text>
                  </div>
                  <div className="flex w-full items-center gap-20 rounded-[10px] bg-indigo-900_01 p-[17px]">
                    <div className="relative my-2.5 h-[116px] w-[25%] md:h-auto">
                      <Img
                        src="images/img_ellipse_6.svg"
                        alt="circleimage"
                        className="h-[116px] w-[116px] rounded-[50%]"
                      />
                      <Img
                        src="images/img_group.svg"
                        alt="image"
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[56px] w-[90%]"
                      />
                    </div>
                    <Text size="md" as="p" className="mb-[38px] self-end">
                      Marketing support
                    </Text>
                  </div>
                  <div className="flex w-full items-center justify-between gap-5 rounded-[10px] bg-indigo-900_01 p-4 sm:flex-col">
                    <div className="relative my-[11px] h-[116px] w-[22%] md:h-auto sm:w-full">
                      <Img
                        src="images/img_ellipse_6.svg"
                        alt="circleimage"
                        className="h-[116px] w-[116px] rounded-[50%]"
                      />
                      <Img
                        src="images/img_mdi_customer_service.svg"
                        alt="mdicustomer_one"
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[80px] w-[80px]"
                      />
                    </div>
                    <Text size="md" as="p" className="mb-10 mr-9 self-end md:mr-0">
                      24/7 customer services
                    </Text>
                  </div>
                </div>
              </div>
              <div className="relative z-[2] mt-[-56px] flex justify-center bg-indigo-900_01 py-[58px] md:py-5">
                <div className="container-sm mt-[9px] flex justify-center pl-[52px] md:p-5 md:pl-5">
                  <div className="flex w-full items-start gap-6 md:flex-col">
                    <div className="flex w-[48%] flex-col items-start md:w-full">
                      <Heading as="h3" className="text-center">
                        Reseller Agent
                      </Heading>
                      <div className="mt-[214px] flex justify-center self-stretch rounded-[10px] bg-gray-900_05 p-1.5">
                        <Text size="md" as="p" className="mt-[18px] w-[86%] !text-amber-600">
                          Sell our services and earn up to 500k Monthly
                        </Text>
                      </div>
                      <Text className="mt-[30px]" />
                      <Button color="gray_900_05" size="4xl" shape="round" className="mt-[30px] w-full sm:px-5">
                        Fund your account with as low as 1k and start selling
                      </Button>
                      <Text className="mt-[30px]" />
                    </div>
                    <Img
                      src="images/img_ellipse_7.svg"
                      alt="circleimage"
                      className="mt-[21px] h-[648px] w-[648px] rounded-[50%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_yeah_girl_i_did.png"
              alt="yeahgirlidid"
              className="absolute bottom-[2.00px] right-[7%] z-[3] m-auto h-[967px] w-[40%] object-cover"
            />
          </div>

          {/* pricing section */}
          <div className="relative z-[6] mt-[-2px] flex flex-col items-center justify-center bg-blue-100_01 py-[60px] md:py-5">
            <div className="container-sm mb-[23px] flex flex-col items-center gap-[130px] px-[78px] md:gap-[97px] md:p-5 md:px-5 sm:gap-[65px]">
              <Heading as="h2" className="text-center !text-gray-900_05">
                Pricing
              </Heading>
              <div className="flex w-[97%] items-center justify-between gap-5 md:w-full md:flex-col">
                <div className="relative h-[701px] w-[46%] md:w-full">
                  <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-[96%] flex-col items-end gap-[294px] rounded-[80px] bg-indigo-900_01 p-[53px] md:gap-[220px] md:p-5 sm:gap-[147px]">
                    <Heading as="h3" className="mt-[27px] w-[91%] !font-semibold md:w-full">
                      <span className="text-white-A700_01">
                        <>
                          Local transaction fee: <br />
                        </>
                      </span>
                      <span className="text-5xl text-amber-600">
                        <>
                          1.3%
                          <br />
                        </>
                      </span>
                    </Heading>
                    <Button
                      size="3xl"
                      shape="round"
                      className="mb-[61px] w-full border border-solid border-black-900_01 font-semibold !text-gray-900_05 sm:px-5"
                    >
                      Choose Plan
                    </Button>
                  </div>
                  <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-[96%] flex-col items-end gap-[210px] md:gap-[157px] sm:gap-[105px]">
                    <Text size="md" as="p" className="!text-amber-600">
                      <>
                        Support small, medium and large scale local businesses.
                        <br />
                        Flexible Team setup
                        <br />
                        Personal Market Place
                      </>
                    </Text>
                    <Button shape="circle" className="w-[114px] rotate-[90deg] !rounded-[57px]">
                      <Img src="images/img_icon_outlined.svg" />
                    </Button>
                  </div>
                </div>
                <div className="relative h-[700px] w-[47%] md:w-full">
                  <div className="absolute left-[0.00px] top-[0.00px] m-auto flex w-[93%] flex-col items-center rounded-[80px] bg-indigo-900_01 p-[23px] sm:p-5">
                    <Heading as="h4" className="mt-[57px] w-[90%] self-end !font-semibold md:w-full">
                      <span className="text-white-A700_01">International transaction fee: &nbsp;</span>
                      <span className="text-5xl text-amber-600">
                        <>
                          2.5%
                          <br />
                        </>
                      </span>
                    </Heading>
                    <Text size="md" as="p" className="mt-[19px] w-[97%] !text-amber-600 md:w-full">
                      <>
                        Cross-border payment
                        <br />
                        Instant Remittance in Digital Currency
                        <br />
                        Exposure to Global Markets
                        <br />
                        Offer Localized Payment to Customers
                      </>
                    </Text>
                    <Button
                      size="3xl"
                      shape="round"
                      className="mb-[91px] mt-[45px] min-w-[382px] border border-solid border-black-900_01 font-semibold !text-gray-900_05 sm:px-5"
                    >
                      Choose Plan
                    </Button>
                  </div>
                  <Button
                    shape="circle"
                    className="absolute bottom-[0.00px] right-[0.00px] m-auto w-[114px] rotate-[90deg] !rounded-[57px]"
                  >
                    <Img src="images/img_icon_outlined.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* wallet services section */}
          <div className="relative z-[7] mt-[-2px] h-[1510px] md:h-auto">
            <div className="flex w-full flex-col items-end">
              <div className="flex flex-col items-center self-stretch bg-indigo-900_01 py-[59px] md:py-5">
                <div className="container-sm mb-[66px] flex flex-col items-center gap-[150px] px-[248px] md:gap-28 md:p-5 md:px-5 sm:gap-[75px]">
                  <Heading as="h2" className="text-center">
                    Wallet Services
                  </Heading>
                  <div className="flex flex-col gap-10 self-stretch">
                    {data.map((d, index) => (
                      <Button
                        key={"listintegrate" + index}
                        color="gray_900_05"
                        size="6xl"
                        shape="round"
                        className="w-full flex-1 !text-amber-600 sm:px-5"
                      >
                        Integrate and generate unique account number for your users
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <Img
                src="images/img_portrait_excite.png"
                alt="portraitexcite"
                className="relative mt-[-114px] h-[922px] w-[49%] object-cover"
              />
            </div>

            {/* international partnership section */}
            <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-full flex-col items-center bg-gray-100 py-[62px] md:py-5">
              <div className="container-sm mb-[110px] flex flex-col items-start gap-[136px] px-[52px] md:gap-[102px] md:p-5 md:px-5 sm:gap-[68px]">
                <Heading as="h3" className="w-[32%] self-center text-center leading-[48px] !text-gray-900_05 md:w-full">
                  International Partnership
                </Heading>
                <div className="flex w-[49%] flex-col gap-[30px] md:w-full">
                  <div className="flex justify-center rounded-[10px] bg-gray-900_05 p-3">
                    <Text size="md" as="p" className="mt-1.5 w-[88%]">
                      Receive payment in stablecoin as an international company.
                    </Text>
                  </div>
                  <Text />
                  <Text />
                </div>
              </div>
            </div>
          </div>

          {/* video demo section */}
          <div className="flex justify-center bg-blue_gray-900 py-2.5">
            <div className="container-sm flex items-center justify-between gap-5 px-[91px] md:flex-col md:p-5 md:px-5">
              <div className="flex items-center gap-9 md:flex-col">
                <div className="flex">
                  <Heading size="xl" as="h2" className="self-end text-center">
                    Watch Our Video Demo on how to use Leverpay APP
                  </Heading>
                </div>
                <div className="h-full w-px bg-white-A700_01 md:h-px md:w-full" />
              </div>
              <Heading size="xl" as="h3" className="mb-1 mr-[122px] self-end text-center !font-extrabold md:mr-0">
                Watch Demo
              </Heading>
            </div>
          </div>
          <Img src="images/img_frame_5.png" alt="image_one" className="h-[637px] w-full object-cover md:h-auto" />

          {/* partners section */}
          <div className="relative h-[2581px]">
            <div className="absolute left-0 right-0 top-[0.00px] m-auto w-full">
              <div className="flex flex-col items-center bg-white-A700_01 py-[66px] md:py-5">
                <div className="container-sm mb-[74px] mt-1 flex flex-col items-center gap-[107px] px-[7px] md:gap-20 md:p-5 sm:gap-[53px]">
                  <Heading as="h2" className="text-center !text-gray-900_05">
                    Our Partners
                  </Heading>
                  <div className="flex flex-col gap-px self-stretch pr-4 pt-4">
                    {[...Array(2)].map((d, index) => (
                      <Img
                        key={"listmicrosoftlo" + index}
                        src="images/img_microsoft_logo_02.png"
                        alt="microsoftlogo"
                        className="h-[169px] w-[24%] object-cover md:w-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative mt-[-29px] flex justify-center bg-gray-900_05 py-[66px] md:py-5">
                <div className="container-sm mb-[1050px] mt-[18px] flex justify-center px-[410px] md:p-5 md:px-5">
                  <Heading as="h3" className="text-center">
                    Our App Screenshot
                  </Heading>
                </div>
              </div>
            </div>

            {/* contact form section */}
            <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-full flex-col items-center">
              <div className="container-sm px-[41px] md:p-5 md:px-5">
                <div className="relative h-[1312px]">
                  <Img
                    src="images/img_cards_1.png"
                    alt="cardsone_one"
                    className="absolute left-[0.00px] top-[0.00px] m-auto h-[382px] w-[50%] object-cover"
                  />
                  <div className="absolute right-[0.00px] top-[7.00px] m-auto flex w-[48%] flex-col items-end">
                    <Img
                      src="images/img_transaction_1.png"
                      alt="transactionone"
                      className="h-[368px] w-full object-cover md:h-auto"
                    />
                    <Img
                      src="images/img_dashboard_1.png"
                      alt="dashboardone"
                      className="relative mr-[54px] mt-[-94px] h-[846px] w-[73%] object-cover md:mr-0"
                    />
                  </div>
                  <div className="absolute bottom-[0.00px] left-[0.00px] m-auto flex w-[55%] flex-col items-center rounded-[10px] bg-white-A700_01 shadow-xs">
                    <div className="mt-[21px] flex flex-col gap-[35px] self-stretch">
                      <div className="ml-7 flex w-[90%] items-center justify-between gap-5 md:ml-0 md:w-full">
                        <Heading size="xl" as="h4" className="!font-bold !text-blue_gray-900_01">
                          Fund Your Account{" "}
                        </Heading>
                        <Img src="images/img_thumbs_up.svg" alt="thumbsup_one" className="h-[29px] w-[10%]" />
                      </div>
                      <div className="ml-4 flex w-[92%] gap-[13px] md:ml-0 md:w-full md:flex-row sm:flex-col">
                        <div className="flex items-center gap-4 rounded-[30px] bg-gray-900_07 p-[11px]">
                          <div className="my-5 flex flex-col items-center rounded-[39px] bg-blue_gray-800 p-5">
                            <Img
                              src="images/img_wallet_2_6_1.svg"
                              alt="usdt_equivalent"
                              className="h-[38px] w-[37px]"
                            />
                          </div>
                          <div className="mb-4 flex flex-col items-start gap-[7px] self-end">
                            <Heading size="md" as="h5" className="!text-orange-500_ea">
                              USDT EQUIVALENT
                            </Heading>
                            <Heading size="xl" as="h6" className="!font-bold">
                              0.000USDT
                            </Heading>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 rounded-[30px] bg-green-700 p-[19px]">
                          <div className="my-3 flex flex-col items-center rounded-[39px] bg-blue_gray-800 p-5">
                            <Img
                              src="images/img_wallet_2_6_1.svg"
                              alt="wallet26one_one"
                              className="h-[38px] w-[37px]"
                            />
                          </div>
                          <div className="mb-2 flex flex-col items-start gap-[7px] self-end">
                            <Heading size="md" as="h6">
                              NAIRA EQUIVALENT
                            </Heading>
                            <Heading size="xl" as="h4" className="!font-bold">
                              N 50.000
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex w-[92%] justify-between gap-5 md:w-full sm:flex-col">
                          <div className="flex flex-wrap gap-[17px]">
                            <Heading size="s" as="h6" className="text-center !font-bold !text-black-900_01">
                              Stable Coin
                            </Heading>
                            <Heading size="s" as="h6" className="text-center !font-bold !text-green-700">
                              Naira
                            </Heading>
                          </div>
                          <div className="relative h-[22px] w-[26%] md:h-auto sm:w-full">
                            <Heading size="s" as="h6" className="text-center !font-manrope !text-black-900_01">
                              More
                            </Heading>
                            <Img
                              src="images/img_vector.svg"
                              alt="vector_one"
                              className="absolute left-1/4 top-[4.00px] m-auto h-[12px]"
                            />
                          </div>
                        </div>
                        <div className="mt-5 h-[2px] w-full self-stretch bg-gray-600_33 blur-[2.00px] backdrop-opacity-[0.5]" />
                        <div className="relative ml-[185px] mt-[-2px] h-[4px] w-[30%] self-start bg-green-700_02 md:ml-0" />
                      </div>
                    </div>
                    <Heading
                      size="xs"
                      as="p"
                      className="ml-9 mt-[30px] self-start text-center !font-manrope !font-extrabold !text-black-900_01 md:ml-0"
                    >
                      Transfer 50,000 to your Unique Account Number
                    </Heading>
                    <div className="mt-5 flex w-[86%] rounded-[15px] bg-blue_gray-100_66 p-[17px] md:w-full">
                      <div className="mb-[110px] mt-[17px] flex w-[65%] flex-col items-start md:w-full">
                        <div className="flex flex-wrap justify-between gap-5 self-stretch">
                          <Heading size="s" as="h6" className="self-end !font-montserrat !text-black-900_01">
                            Account Name:
                          </Heading>
                          <Heading size="s" as="h6" className="self-start !font-montserrat !text-black-900_01">
                            Shedrach Twin Sister
                          </Heading>
                        </div>
                        <Text
                          as="p"
                          className="ml-[5px] mt-[37px] !font-montserrat !font-medium !text-indigo-900 md:ml-0"
                        >
                          BANK NAME
                        </Text>
                        <div className="ml-[5px] mt-[57px] flex flex-col items-end self-stretch md:ml-0">
                          <CheckBox
                            name="user"
                            label="7549152771"
                            id="user"
                            className="relative z-[4] gap-[35px] py-px pr-[35px] text-left font-montserrat text-base font-extrabold text-indigo-900 sm:pr-5"
                          />
                          <CheckBox
                            name="accountnumber"
                            label="ACCOUNT NUMBER"
                            id="accountnumber"
                            className="relative mt-[-23px] self-stretch pr-[35px] pt-1.5 text-left font-montserrat text-base font-medium text-indigo-900 sm:pr-5"
                          />
                        </div>
                        <div className="ml-[5px] mt-[26px] flex w-[63%] flex-wrap justify-between gap-5 md:ml-0 md:w-full">
                          <Text as="p" className="self-start !font-montserrat !font-medium !text-indigo-900">
                            AMOUNT
                          </Text>
                          <Heading size="s" as="h6" className="self-end !font-montserrat !text-indigo-900">
                            NGN 50,000
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <Button
                      color="green_700_02"
                      size="sm"
                      className="mt-[22px] min-w-[511px] rounded font-manrope font-bold sm:px-5"
                    >
                      Proceed
                    </Button>
                    <Img
                      src="images/img_close.svg"
                      alt="close_one"
                      className="mb-[23px] mr-[34px] mt-5 h-[35px] w-[34px] self-end md:mr-0"
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-[5] mt-[-285px] flex justify-center self-stretch bg-indigo-900_01 py-[66px] md:py-5">
                <div className="container-sm mt-14 flex justify-center px-8 md:p-5 sm:px-5">
                  <div className="flex w-[96%] items-start justify-between gap-5 rounded-[50px] bg-gray-900_05 pl-[46px] md:w-full md:flex-col md:pl-5">
                    <div className="mt-[136px] flex w-[34%] flex-col gap-[15px] md:w-full">
                      <Heading size="3xl" as="h1" className="leading-[50px]">
                        <span className="text-white-A700_01">
                          <>
                            Get in touch with
                            <br />
                          </>
                        </span>
                        <span className="text-amber-600">Leverpay!</span>
                      </Heading>
                      <Heading size="xl" as="h4" className="w-[91%] italic md:w-full">
                        <>
                          Your Perfect Payment Solution <br />
                          for Startup Success!
                        </>
                      </Heading>
                    </div>
                    <div className="flex w-[56%] flex-col items-end rounded-[50px] bg-white-A700_01 pb-[118px] shadow-sm md:w-full md:p-5 md:pb-5">
                      <div className="self-stretch px-8 pt-8 sm:px-5 sm:pt-5">
                        <div className="mt-11 pl-2 pt-2">
                          <div className="mt-2 py-[34px] sm:py-5">
                            <div className="flex sm:flex-col">
                              <div className="w-full pr-3 sm:w-full">
                                <div className="flex flex-col">
                                  <div className="flex self-start py-1.5">
                                    <Heading
                                      size="xs"
                                      as="p"
                                      className="!font-montserrat !text-[15.5px] !text-gray-900_01"
                                    >
                                      First Name
                                    </Heading>
                                  </div>
                                  <Input
                                    shape="round"
                                    name="firstName"
                                    className="border border-solid border-blue_gray-100_01 sm:pr-5"
                                  />
                                </div>
                              </div>
                              <div className="w-full pl-3 sm:w-full">
                                <div className="flex flex-col">
                                  <div className="flex self-start py-[5px]">
                                    <Heading
                                      size="xs"
                                      as="p"
                                      className="self-end !font-montserrat !text-[15.5px] !text-gray-900_01"
                                    >
                                      Last Name
                                    </Heading>
                                  </div>
                                  <Input
                                    shape="round"
                                    name="lastName"
                                    className="border border-solid border-blue_gray-100_01 sm:pr-5"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-8 flex flex-col">
                              <div className="flex self-start py-1.5">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-montserrat !text-[15.25px] !text-gray-900_01"
                                >
                                  Business Email
                                </Heading>
                              </div>
                              <Input
                                shape="round"
                                name="businessemail"
                                className="border border-solid border-blue_gray-100_01 sm:pr-5"
                              />
                            </div>
                            <div className="mb-11 mt-2 flex flex-col">
                              <div className="flex self-start py-[5px]">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="self-start !font-montserrat !text-[15.25px] !text-gray-900_01"
                                >
                                  Phone Number
                                </Heading>
                              </div>
                              <Input
                                shape="round"
                                name="phoneNumber"
                                className="border border-solid border-blue_gray-100_01 sm:pr-5"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        color="blue_700"
                        size="lg"
                        className="relative mr-[75px] mt-[-13px] min-w-[458px] rounded-md font-montserrat font-extrabold md:mr-0 sm:px-5"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* footer section */}
          <footer className="rounded-bl-[50px] rounded-br-[50px] bg-gray-900_05 p-[25px] sm:p-5">
            <div className="mb-[42px] flex flex-col items-center gap-[17px]">
              <div className="flex w-[95%] flex-col gap-[82px] md:w-full md:gap-[61px] sm:gap-[41px]">
                <div className="flex flex-col gap-[86px] md:gap-16 sm:gap-[43px]">
                  <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
                    <Heading size="3xl" as="h1" className="w-[40%] tracking-[-0.72px] !text-gray-50 md:w-full">
                      <span className="text-gray-50">Lets&nbsp;</span>
                      <span className="text-deep_orange-400">Get Started With Leverpay App |</span>
                    </Heading>
                    <Button
                      color="yellow_800"
                      size="xl"
                      rightIcon={
                        <Img
                          src="images/img_icon_outlined_directions_straight_arrows_up_right.svg"
                          alt="icon / outlined / directions / straight arrows / up right"
                          className="h-[42px] w-[42px]"
                        />
                      }
                      className="min-w-[202px] gap-px rounded-[31px] font-medium tracking-[-0.39px]"
                    >
                      Get Started
                    </Button>
                  </div>
                  <div className="container-xs h-[2px] bg-blue_gray-700 md:p-5" />
                </div>
                <div className="container-xs flex items-start self-start pb-2.5 md:flex-col md:p-5">
                  <div className="flex flex-1 flex-col gap-[13px] md:self-stretch">
                    <Img src="images/img_footer_logo.svg" alt="footerlogo_one" className="h-[33px] w-[35%]" />
                    <div className="relative h-[204px] md:h-auto">
                      <Heading size="s" as="h6" className="!font-semibold italic !text-gray-50">
                        At Leverpay, we understand the challenges startups face, and that&#39;s why we&#39;ve crafted
                        the perfect payment solution for you. Our easy integration, instant remittance, and a range of
                        features cater specifically to your business needs.
                      </Heading>
                      <div className="absolute bottom-[12.32px] left-[0.00px] m-auto flex gap-[5px]">
                        <Img src="images/img_facebook.svg" alt="facebook_one" className="h-[24px] w-[24px]" />
                        <Img src="images/img_user_white_a700_01.svg" alt="user_two" className="h-[24px] w-[24px]" />
                        <Img src="images/img_call.svg" alt="call_one" className="h-[24px] w-[24px]" />
                        <Img src="images/img_info.svg" alt="info_one" className="h-[24px] w-[24px]" />
                        <Img
                          src="images/img_ui_icon_twitter_filled.svg"
                          alt="uiicontwitter"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-[29px] flex flex-col items-start gap-[27px] md:ml-0">
                    <Heading size="lg" as="h5" className="tracking-[-0.30px] !text-deep_orange-400">
                      Navigation
                    </Heading>
                    <ul className="flex flex-col items-start gap-[19px]">
                      <li>
                        <a href="#">
                          <Text as="p" className="tracking-[-0.24px] !text-gray-50">
                            Home
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="tracking-[-0.24px] !text-gray-50">
                            About Us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="tracking-[-0.24px] !text-gray-50">
                            Features
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="tracking-[-0.24px] !text-gray-50">
                            Pricing
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="tracking-[-0.24px] !text-gray-50">
                            Reviews
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="tracking-[-0.24px] !text-gray-50">
                            API
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="tracking-[-0.24px] !text-gray-50">
                            Invest with us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mb-[21px]">
                          <Text as="p" className="tracking-[-0.24px] !text-gray-50">
                            Partner with us
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="ml-[18px] flex flex-col items-start gap-7 md:ml-0">
                    <Heading size="lg" as="h5" className="tracking-[-0.30px] !text-deep_orange-400">
                      Contact
                    </Heading>
                    <div className="flex flex-col items-start gap-[21px] pb-[39px] sm:pb-5">
                      <Text as="p" className="tracking-[-0.24px] !text-gray-50">
                        +2349060898687
                      </Text>
                      <a href="mailto:contact@leverpay.io" target="_blank" rel="noreferrer">
                        <Text as="p" className="tracking-[-0.24px] !text-gray-50 underline">
                          contact@leverpay.io
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="ml-[43px] flex w-[25%] flex-col items-start gap-[26px] md:ml-0 md:w-full">
                    <Heading size="lg" as="h5" className="tracking-[-0.30px] !text-deep_orange-400">
                      Get the latest Update
                    </Heading>
                    <div className="flex self-stretch">
                      <Input
                        size="sm"
                        type="email"
                        name="date"
                        placeholder={`Email Address`}
                        className="flex-grow rounded-bl-[14px] rounded-tl-[14px] tracking-[-0.24px] text-black-900_01 sm:pr-5"
                      />
                      <Button size="xs" className="w-[46px] rounded-br-[14px] rounded-tr-[14px]">
                        <Img src="images/img_ui_icon_send_filled.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-5 self-stretch">
                <Text size="s" as="p" className="tracking-[-0.30px]">
                  Copyright© 2024Leverpay. All Rights Reserved.
                </Text>
                <Text size="s" as="p" className="mr-[54px] tracking-[-0.30px]">
                  User Terms & Conditions | Privacy Policy
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
