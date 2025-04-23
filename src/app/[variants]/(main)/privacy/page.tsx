/* eslint-disable react/no-unescaped-entities */
import { Divider, Skeleton } from 'antd';
import { Fragment, Suspense } from 'react';
import { Flexbox } from 'react-layout-kit';
import urlJoin from 'url-join';

import StructuredData from '@/components/StructuredData';
import { BRANDING_NAME } from '@/const/branding';
import { OFFICIAL_SITE } from '@/const/url';
import { ldModule } from '@/server/ld';
import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';
import { DynamicLayoutProps } from '@/types/next';
import { RouteVariants } from '@/utils/server/routeVariants';

import GridLayout from './features/GridLayout';

export const generateMetadata = async (props: DynamicLayoutProps) => {
  const locale = await RouteVariants.getLocale(props);
  const { t } = await translation('metadata', locale);
  return metadataModule.generate({
    canonical: urlJoin(OFFICIAL_SITE, 'privacy'),
    description: t('Privacy Policy', { appName: BRANDING_NAME }),
    title: t('Privacy Policy'),
    url: '/privacy',
  });
};

const Page = async (props: DynamicLayoutProps) => {
  const { isMobile, locale } = await RouteVariants.getVariantsFromProps(props);
  const { t } = await translation('metadata', locale);

  const ld = ldModule.generate({
    description: t('Privacy Policy', { appName: BRANDING_NAME }),
    title: t('Privacy Policy', { appName: BRANDING_NAME }),
    url: '/privacy',
  });

  return (
    <>
      <StructuredData ld={ld} />
      <Flexbox gap={isMobile ? 16 : 48}>
        <Suspense
          fallback={
            <GridLayout>
              <Divider />
              <Skeleton active paragraph={{ rows: 5 }} />
            </GridLayout>
          }
        >
          <div data-custom-class="body">
            <div>
              <h1>PRIVACY POLICY</h1>
            </div>
            <div>
              <strong>Last updated April 21, 2025</strong>
            </div>
            <div>
              This Privacy Notice for MC2 (MCrowdsourcing Canada Inc.) (doing business as Faya) ("
              <strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"), describes how
              and why we might access, collect, store, use, and/or share ("<strong>process</strong>
              ") your personal information when you use our services ("<strong>Services</strong>"),
              including when you:
            </div>
            <ul>
              <li data-custom-class="body_text">
                Visit our website at https://faya.chat, or any website of ours that links to this
                Privacy Notice
              </li>
            </ul>
            <ul>
              <li data-custom-class="body_text">
                Download and use our mobile application (Faya), or any other application of ours
                that links to this Privacy Notice
              </li>
            </ul>
            <ul>
              <li data-custom-class="body_text">Use Faya. Kind, autonomous AI for everyone.</li>
            </ul>
            <ul>
              <li data-custom-class="body_text">
                Engage with us in other related ways, including any sales, marketing, or events
              </li>
            </ul>
            <div>
              <strong>Questions or concerns?&nbsp;</strong>Reading this Privacy Notice will help you
              understand your privacy rights and choices. We are responsible for making decisions
              about how your personal information is processed. If you do not agree with our
              policies and practices, please do not use our Services. If you still have any
              questions or concerns, please contact us at privacy@faya.chat.
            </div>
            <div>
              <h2>SUMMARY OF KEY POINTS</h2>
            </div>
            <div>
              <strong>
                <em>
                  This summary provides key points from our Privacy Notice, but you can find out
                  more details about any of these topics by clicking the link following each key
                  point or by using our&nbsp;
                </em>
              </strong>
              <a href="#toc">
                <strong>
                  <em>table of contents</em>
                </strong>
              </a>
              <strong>
                <em>&nbsp;below to find the section you are looking for.</em>
              </strong>
            </div>
            <div>
              <strong>What personal information do we process?</strong> When you visit, use, or
              navigate our Services, we may process personal information depending on how you
              interact with us and the Services, the choices you make, and the products and features
              you use. Learn more about&nbsp;
              <a href="#personalinfo">personal information you disclose to us</a>.
            </div>
            <div>
              <strong>Do we process any sensitive personal information?&nbsp;</strong>Some of the
              information may be considered "special" or "sensitive" in certain jurisdictions, for
              example your racial or ethnic origins, sexual orientation, and religious beliefs. We
              do not process sensitive personal information.
            </div>
            <div>
              <strong>Do we collect any information from third parties?</strong> We do not collect
              any information from third parties.
            </div>
            <div>
              <strong>How do we process your information?</strong> We process your information to
              provide, improve, and administer our Services, communicate with you, for security and
              fraud prevention, and to comply with law. We may also process your information for
              other purposes with your consent. We process your information only when we have a
              valid legal reason to do so. Learn more about&nbsp;
              <a href="#infouse">how we process your information</a>.
            </div>
            <div>
              <strong>
                In what situations and with which parties do we share personal information?
              </strong>{' '}
              We may share information in specific situations and with specific third parties. Learn
              more about&nbsp;
              <a href="#whoshare">when and with whom we share your personal information</a>.
            </div>
            <div>
              <strong>How do we keep your information safe?</strong> We have adequate organizational
              and technical processes and procedures in place to protect your personal information.
              However, no electronic transmission over the internet or information storage
              technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that
              hackers, cybercriminals, or other unauthorized third parties will not be able to
              defeat our security and improperly collect, access, steal, or modify your information.
              Learn more about&nbsp;<a href="#infosafe">how we keep your information safe</a>.
            </div>
            <div>
              <strong>What are your rights?</strong> Depending on where you are located
              geographically, the applicable privacy law may mean you have certain rights regarding
              your personal information. Learn more about&nbsp;
              <a href="#privacyrights">your privacy rights</a>.
            </div>
            <div>
              <strong>How do you exercise your rights?</strong> The easiest way to exercise your
              rights is by submitting a&nbsp;
              <a
                href="https://app.termly.io/notify/f5cb15cb-97bd-49e3-9b2c-760f565ea77d"
                rel="noopener noreferrer"
                target="_blank"
              >
                data subject access request
              </a>
              , or by contacting us. We will consider and act upon any request in accordance with
              applicable data protection laws.
            </div>
            <div>
              Want to learn more about what we do with any information we collect?&nbsp;
              <a href="#toc">Review the Privacy Notice in full</a>.
            </div>
            <div>
              <h2>TABLE OF CONTENTS</h2>
            </div>
            <div>
              <a href="#infocollect">1. WHAT INFORMATION DO WE COLLECT?</a>
            </div>
            <div>
              <a href="#infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</a>
            </div>
            <div>
              <a href="#legalbases">
                3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
              </a>
            </div>
            <div>
              <a href="#whoshare">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>
            </div>
            <div>
              <a href="#cookies">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a>
            </div>
            <div>
              <a href="#ai">6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</a>
            </div>
            <div>
              <a href="#sociallogins">7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a>
            </div>
            <div>
              <a href="#intltransfers">8. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</a>
            </div>
            <div>
              <a href="#inforetain">9. HOW LONG DO WE KEEP YOUR INFORMATION?</a>
            </div>
            <div>
              <a href="#infosafe">10. HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
            </div>
            <div>
              <a href="#infominors">11. DO WE COLLECT INFORMATION FROM MINORS?</a>
            </div>
            <div>
              <a href="#privacyrights">12. WHAT ARE YOUR PRIVACY RIGHTS?</a>
            </div>
            <div>
              <a href="#DNT">13. CONTROLS FOR DO-NOT-TRACK FEATURES</a>
            </div>
            <div>
              <a href="#uslaws">14. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a>
            </div>
            <div>
              <a href="#otherlaws">15. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</a>
            </div>
            <div>
              <a href="#policyupdates">16. DO WE MAKE UPDATES TO THIS NOTICE?</a>
            </div>
            <div>
              <a href="#contact">17. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
            </div>
            <div>
              <a href="#request">
                18. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
              </a>
            </div>
            <div>
              <h2 id="infocollect">1. WHAT INFORMATION DO WE COLLECT?</h2>
              <h3>Personal information you disclose to us</h3>
              <strong>
                <em>In Short:</em>
              </strong>
              <strong />
              <em>We collect personal information that you provide to us.</em>
            </div>
            <div>
              We collect personal information that you voluntarily provide to us when you register
              on the Services,&nbsp;express an interest in obtaining information about us or our
              products and Services, when you participate in activities on the Services, or
              otherwise when you contact us.
            </div>
            <div>
              <strong>Personal Information Provided by You.</strong> The personal information that
              we collect depends on the context of your interactions with us and the Services, the
              choices you make, and the products and features you use. The personal information we
              collect may include the following:
            </div>
            <ul>
              <li data-custom-class="body_text">email addresses</li>
            </ul>
            <ul>
              <li data-custom-class="body_text">usernames</li>
            </ul>
            <ul>
              <li data-custom-class="body_text">passwords</li>
            </ul>
            <ul>
              <li data-custom-class="body_text">contact preferences</li>
            </ul>
            <div>
              <strong>Sensitive Information.</strong> We do not process sensitive information.
            </div>
            <div>
              <strong>Payment Data.</strong> We may collect data necessary to process your payment
              if you choose to make purchases, such as your payment instrument number, and the
              security code associated with your payment instrument. All payment data is handled and
              stored by Stripe. You may find their privacy notice link(s) here:{' '}
              <a href="https://stripe.com/privacy" rel="noreferrer" target="_blank">
                https://stripe.com/privacy
              </a>
              .
            </div>
            <div>
              <strong>Social Media Login Data.&nbsp;</strong>We may provide you with the option to
              register with us using your existing social media account details, like your Facebook,
              X, or other social media account. If you choose to register in this way, we will
              collect certain profile information about you from the social media provider, as
              described in the section called "
              <a href="#sociallogins">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a>" below.
            </div>
            <div>
              All personal information that you provide to us must be true, complete, and accurate,
              and you must notify us of any changes to such personal information.
            </div>
            <div>
              <h3>Information automatically collected</h3>
              <strong>
                <em>In Short:</em>
              </strong>
              <strong />
              <em>
                Some information &mdash; such as your Internet Protocol (IP) address and/or browser
                and device characteristics &mdash; is collected automatically when you visit our
                Services.
              </em>
            </div>
            <div>
              We automatically collect certain information when you visit, use, or navigate the
              Services. This information does not reveal your specific identity (like your name or
              contact information) but may include device and usage information, such as your IP
              address, browser and device characteristics, operating system, language preferences,
              referring URLs, device name, country, location, information about how and when you use
              our Services, and other technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our internal analytics
              and reporting purposes.
            </div>
            <div>
              Like many businesses, we also collect information through cookies and similar
              technologies.{' '}
            </div>
            <div>The information we collect includes:</div>
            <ul>
              <li data-custom-class="body_text">
                <em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic,
                usage, and performance information our servers automatically collect when you access
                or use our Services and which we record in log files. Depending on how you interact
                with us, this log data may include your IP address, device information, browser
                type, and settings and information about your activity in the Services&nbsp;(such as
                the date/time stamps associated with your usage, pages and files viewed, searches,
                and other actions you take such as which features you use), device event information
                (such as system activity, error reports (sometimes called "crash dumps"), and
                hardware settings).
              </li>
            </ul>
            <div>
              <div>
                <div>
                  <h3>Google API</h3>
                  Our use of information received from Google APIs will adhere to&nbsp;
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Google API Services User Data Policy
                  </a>
                  , including the&nbsp;
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Limited Use requirements
                  </a>
                  .<br />
                </div>
                <div>
                  <h2 id="infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
                  <strong>
                    <em>In Short:&nbsp;</em>
                  </strong>
                  <em>
                    We process your information to provide, improve, and administer our Services,
                    communicate with you, for security and fraud prevention, and to comply with law.
                    We may also process your information for other purposes with your consent.
                  </em>
                </div>
                <div>
                  <strong>
                    We process your personal information for a variety of reasons, depending on how
                    you interact with our Services, including:
                  </strong>
                </div>
                <ul>
                  <li data-custom-class="body_text">
                    <strong>
                      To facilitate account creation and authentication and otherwise manage user
                      accounts.&nbsp;
                    </strong>
                    We may process your information so you can create and log in to your account, as
                    well as keep your account in working order.
                  </li>
                </ul>
                <div>
                  <ul>
                    <li data-custom-class="body_text">
                      <strong>
                        To deliver and facilitate delivery of services to the user.&nbsp;
                      </strong>
                      We may process your information to provide you with the requested service.
                    </li>
                  </ul>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div>
                              <div>
                                <div>
                                  <div>
                                    <div>
                                      <div>
                                        <div>
                                          <ul>
                                            <li data-custom-class="body_text">
                                              <strong>To protect our Services.</strong> We may
                                              process your information as part of our efforts to
                                              keep our Services safe and secure, including fraud
                                              monitoring and prevention.
                                            </li>
                                          </ul>
                                          <div>
                                            <div>
                                              <div>
                                                <ul>
                                                  <li data-custom-class="body_text">
                                                    <strong>To identify usage trends.</strong> We
                                                    may process information about how you use our
                                                    Services to better understand how they are being
                                                    used so we can improve them.
                                                  </li>
                                                </ul>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <ul>
                                                        <li data-custom-class="body_text">
                                                          <strong>
                                                            To save or protect an individual's vital
                                                            interest.
                                                          </strong>{' '}
                                                          We may process your information when
                                                          necessary to save or protect an
                                                          individual&rsquo;s vital interest, such as
                                                          to prevent harm.
                                                        </li>
                                                      </ul>
                                                      <div>
                                                        <h2 id="legalbasis">
                                                          3. WHAT LEGAL BASES DO WE RELY ON TO
                                                          PROCESS YOUR INFORMATION?
                                                        </h2>
                                                        <em>
                                                          <strong>In Short:&nbsp;</strong>We only
                                                          process your personal information when we
                                                          believe it is necessary and we have a
                                                          valid legal reason (i.e., legal basis) to
                                                          do so under applicable law, like with your
                                                          consent, to comply with laws, to provide
                                                          you with services to enter into or fulfill
                                                          our contractual obligations, to protect
                                                          your rights, or to fulfill our legitimate
                                                          business interests.
                                                        </em>
                                                      </div>
                                                      <div>
                                                        <em>
                                                          <strong>
                                                            <u>
                                                              If you are located in the EU or UK,
                                                              this section applies to you.
                                                            </u>
                                                          </strong>
                                                        </em>
                                                      </div>
                                                      <div>
                                                        The General Data Protection Regulation
                                                        (GDPR) and UK GDPR require us to explain the
                                                        valid legal bases we rely on in order to
                                                        process your personal information. As such,
                                                        we may rely on the following legal bases to
                                                        process your personal information:
                                                      </div>
                                                      <ul>
                                                        <li data-custom-class="body_text">
                                                          <strong>Consent.&nbsp;</strong>We may
                                                          process your information if you have given
                                                          us permission (i.e., consent) to use your
                                                          personal information for a specific
                                                          purpose. You can withdraw your consent at
                                                          any time. Learn more about&nbsp;
                                                          <a href="#withdrawconsent">
                                                            withdrawing your consent
                                                          </a>
                                                          .
                                                        </li>
                                                      </ul>
                                                      <ul>
                                                        <li data-custom-class="body_text">
                                                          <strong>
                                                            Performance of a Contract.
                                                          </strong>{' '}
                                                          We may process your personal information
                                                          when we believe it is necessary to fulfill
                                                          our contractual obligations to you,
                                                          including providing our Services or at
                                                          your request prior to entering into a
                                                          contract with you.
                                                        </li>
                                                      </ul>
                                                      <ul>
                                                        <li data-custom-class="body_text">
                                                          <strong>Legitimate Interests.</strong> We
                                                          may process your information when we
                                                          believe it is reasonably necessary to
                                                          achieve our legitimate business interests
                                                          and those interests do not outweigh your
                                                          interests and fundamental rights and
                                                          freedoms. For example, we may process your
                                                          personal information for some of the
                                                          purposes described in order to:
                                                        </li>
                                                      </ul>
                                                      <div>
                                                        <div>
                                                          <ul>
                                                            <li data-custom-class="body_text">
                                                              Analyze how our Services are used so
                                                              we can improve them to engage and
                                                              retain users
                                                            </li>
                                                          </ul>
                                                          <div>
                                                            <ul>
                                                              <li data-custom-class="body_text">
                                                                Diagnose problems and/or prevent
                                                                fraudulent activities
                                                              </li>
                                                            </ul>
                                                            <div>
                                                              <ul>
                                                                <li data-custom-class="body_text">
                                                                  <strong>
                                                                    Legal Obligations.
                                                                  </strong>{' '}
                                                                  We may process your information
                                                                  where we believe it is necessary
                                                                  for compliance with our legal
                                                                  obligations, such as to cooperate
                                                                  with a law enforcement body or
                                                                  regulatory agency, exercise or
                                                                  defend our legal rights, or
                                                                  disclose your information as
                                                                  evidence in litigation in which we
                                                                  are involved.
                                                                  <br />
                                                                </li>
                                                              </ul>
                                                              <ul>
                                                                <li data-custom-class="body_text">
                                                                  <strong>Vital Interests.</strong>{' '}
                                                                  We may process your information
                                                                  where we believe it is necessary
                                                                  to protect your vital interests or
                                                                  the vital interests of a third
                                                                  party, such as situations
                                                                  involving potential threats to the
                                                                  safety of any person.
                                                                </li>
                                                              </ul>
                                                              <div>
                                                                <strong>
                                                                  <u>
                                                                    <em>
                                                                      If you are located in Canada,
                                                                      this section applies to you.
                                                                    </em>
                                                                  </u>
                                                                </strong>
                                                              </div>
                                                              <div>
                                                                We may process your information if
                                                                you have given us specific
                                                                permission (i.e., express consent)
                                                                to use your personal information for
                                                                a specific purpose, or in situations
                                                                where your permission can be
                                                                inferred (i.e., implied consent).
                                                                You can&nbsp;
                                                                <a href="#withdrawconsent">
                                                                  withdraw your consent
                                                                </a>
                                                                &nbsp;at any time.
                                                              </div>
                                                              <div>
                                                                In some exceptional cases, we may be
                                                                legally permitted under applicable
                                                                law to process your information
                                                                without your consent, including, for
                                                                example:
                                                              </div>
                                                              <ul>
                                                                <li data-custom-class="body_text">
                                                                  If collection is clearly in the
                                                                  interests of an individual and
                                                                  consent cannot be obtained in a
                                                                  timely way
                                                                </li>
                                                              </ul>
                                                              <ul>
                                                                <li data-custom-class="body_text">
                                                                  For investigations and fraud
                                                                  detection and prevention
                                                                </li>
                                                              </ul>
                                                              <ul>
                                                                <li data-custom-class="body_text">
                                                                  For business transactions provided
                                                                  certain conditions are met
                                                                </li>
                                                              </ul>
                                                              <ul>
                                                                <li data-custom-class="body_text">
                                                                  If it is contained in a witness
                                                                  statement and the collection is
                                                                  necessary to assess, process, or
                                                                  settle an insurance claim
                                                                </li>
                                                              </ul>
                                                              <ul>
                                                                <li data-custom-class="body_text">
                                                                  For identifying injured, ill, or
                                                                  deceased persons and communicating
                                                                  with next of kin
                                                                </li>
                                                              </ul>
                                                              <ul>
                                                                <li data-custom-class="body_text">
                                                                  If we have reasonable grounds to
                                                                  believe an individual has been,
                                                                  is, or may be victim of financial
                                                                  abuse
                                                                </li>
                                                              </ul>
                                                              <ul>
                                                                <li data-custom-class="body_text">
                                                                  If it is reasonable to expect
                                                                  collection and use with consent
                                                                  would compromise the availability
                                                                  or the accuracy of the information
                                                                  and the collection is reasonable
                                                                  for purposes related to
                                                                  investigating a breach of an
                                                                  agreement or a contravention of
                                                                  the laws of Canada or a province
                                                                </li>
                                                              </ul>
                                                              <ul>
                                                                <li data-custom-class="body_text">
                                                                  If disclosure is required to
                                                                  comply with a subpoena, warrant,
                                                                  court order, or rules of the court
                                                                  relating to the production of
                                                                  records
                                                                </li>
                                                              </ul>
                                                              <ul>
                                                                <li data-custom-class="body_text">
                                                                  If it was produced by an
                                                                  individual in the course of their
                                                                  employment, business, or
                                                                  profession and the collection is
                                                                  consistent with the purposes for
                                                                  which the information was produced
                                                                </li>
                                                              </ul>
                                                              <ul>
                                                                <li data-custom-class="body_text">
                                                                  If the collection is solely for
                                                                  journalistic, artistic, or
                                                                  literary purposes
                                                                </li>
                                                              </ul>
                                                              <ul>
                                                                <li data-custom-class="body_text">
                                                                  If the information is publicly
                                                                  available and is specified by the
                                                                  regulations
                                                                </li>
                                                              </ul>
                                                              <div>
                                                                <h2 id="whoshare">
                                                                  4. WHEN AND WITH WHOM DO WE SHARE
                                                                  YOUR PERSONAL INFORMATION?
                                                                </h2>
                                                                <strong>
                                                                  <em>In Short:</em>
                                                                </strong>
                                                                <em>
                                                                  &nbsp;We may share information in
                                                                  specific situations described in
                                                                  this section and/or with the
                                                                  following third parties.
                                                                </em>
                                                              </div>
                                                              <div>
                                                                We may need to share your personal
                                                                information in the following
                                                                situations:
                                                              </div>
                                                              <ul>
                                                                <li data-custom-class="body_text">
                                                                  <strong>
                                                                    Business Transfers.
                                                                  </strong>{' '}
                                                                  We may share or transfer your
                                                                  information in connection with, or
                                                                  during negotiations of, any
                                                                  merger, sale of company assets,
                                                                  financing, or acquisition of all
                                                                  or a portion of our business to
                                                                  another company.
                                                                </li>
                                                              </ul>
                                                              <div>
                                                                <div>
                                                                  <div>
                                                                    <div>
                                                                      <div>
                                                                        <div>
                                                                          <h2 id="cookies">
                                                                            5. DO WE USE COOKIES AND
                                                                            OTHER TRACKING
                                                                            TECHNOLOGIES?
                                                                          </h2>
                                                                          <strong>
                                                                            <em>In Short:</em>
                                                                          </strong>
                                                                          <em>
                                                                            &nbsp;We may use cookies
                                                                            and other tracking
                                                                            technologies to collect
                                                                            and store your
                                                                            information.
                                                                          </em>
                                                                        </div>
                                                                        <div>
                                                                          We may use cookies and
                                                                          similar tracking
                                                                          technologies (like web
                                                                          beacons and pixels) to
                                                                          gather information when
                                                                          you interact with our
                                                                          Services. Some online
                                                                          tracking technologies help
                                                                          us maintain the security
                                                                          of our Services and your
                                                                          account, prevent crashes,
                                                                          fix bugs, save your
                                                                          preferences, and assist
                                                                          with basic site functions.
                                                                        </div>
                                                                        <div>
                                                                          We also permit third
                                                                          parties and service
                                                                          providers to use online
                                                                          tracking technologies on
                                                                          our Services for analytics
                                                                          and advertising, including
                                                                          to help manage and display
                                                                          advertisements, to tailor
                                                                          advertisements to your
                                                                          interests, or to send
                                                                          abandoned shopping cart
                                                                          reminders (depending on
                                                                          your communication
                                                                          preferences). The third
                                                                          parties and service
                                                                          providers use their
                                                                          technology to provide
                                                                          advertising about products
                                                                          and services tailored to
                                                                          your interests which may
                                                                          appear either on our
                                                                          Services or on other
                                                                          websites.
                                                                        </div>
                                                                        <div>
                                                                          To the extent these online
                                                                          tracking technologies are
                                                                          deemed to be a
                                                                          "sale"/"sharing" (which
                                                                          includes targeted
                                                                          advertising, as defined
                                                                          under the applicable laws)
                                                                          under applicable US state
                                                                          laws, you can opt out of
                                                                          these online tracking
                                                                          technologies by submitting
                                                                          a request as described
                                                                          below under section "
                                                                          <a href="#uslaws">
                                                                            DO UNITED STATES
                                                                            RESIDENTS HAVE SPECIFIC
                                                                            PRIVACY RIGHTS?
                                                                          </a>
                                                                          "
                                                                        </div>
                                                                        <div>
                                                                          Specific information about
                                                                          how we use such
                                                                          technologies and how you
                                                                          can refuse certain cookies
                                                                          is set out in our Cookie
                                                                          Notice.
                                                                        </div>
                                                                        <div>
                                                                          <h2 id="ai">
                                                                            6. DO WE OFFER
                                                                            ARTIFICIAL
                                                                            INTELLIGENCE-BASED
                                                                            PRODUCTS?
                                                                          </h2>
                                                                          <strong>
                                                                            <em>In Short:</em>
                                                                          </strong>
                                                                          <em>
                                                                            &nbsp;We offer products,
                                                                            features, or tools
                                                                            powered by artificial
                                                                            intelligence, machine
                                                                            learning, or similar
                                                                            technologies.
                                                                          </em>
                                                                        </div>
                                                                        <div>
                                                                          As part of our Services,
                                                                          we offer products,
                                                                          features, or tools powered
                                                                          by artificial
                                                                          intelligence, machine
                                                                          learning, or similar
                                                                          technologies
                                                                          (collectively, "AI
                                                                          Products"). These tools
                                                                          are designed to enhance
                                                                          your experience and
                                                                          provide you with
                                                                          innovative solutions. The
                                                                          terms in this Privacy
                                                                          Notice govern your use of
                                                                          the AI Products within our
                                                                          Services.
                                                                        </div>
                                                                        <div>
                                                                          <strong>
                                                                            Use of AI Technologies
                                                                          </strong>
                                                                        </div>
                                                                        <div>
                                                                          We provide the AI Products
                                                                          through third-party
                                                                          service providers ("AI
                                                                          Service Providers"),
                                                                          including Anthropic,
                                                                          DALL-E, Groq, Hugging
                                                                          Face, OpenAI and
                                                                          Together.ai. As outlined
                                                                          in this Privacy Notice,
                                                                          your input, output, and
                                                                          personal information will
                                                                          be shared with and
                                                                          processed by these AI
                                                                          Service Providers to
                                                                          enable your use of our AI
                                                                          Products for purposes
                                                                          outlined in "
                                                                          <a href="#legalbases">
                                                                            WHAT LEGAL BASES DO WE
                                                                            RELY ON TO PROCESS YOUR
                                                                            PERSONAL INFORMATION?
                                                                          </a>
                                                                          " You must not use the AI
                                                                          Products in any way that
                                                                          violates the terms or
                                                                          policies of any AI Service
                                                                          Provider.
                                                                        </div>
                                                                        <div>
                                                                          <strong>
                                                                            Our AI Products
                                                                          </strong>
                                                                        </div>
                                                                        <div>
                                                                          Our AI Products are
                                                                          designed for the following
                                                                          functions:
                                                                        </div>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            AI bots
                                                                          </li>
                                                                        </ul>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            AI document generation
                                                                          </li>
                                                                        </ul>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            AI translation
                                                                          </li>
                                                                        </ul>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            Image analysis
                                                                          </li>
                                                                        </ul>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            Image generation
                                                                          </li>
                                                                        </ul>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            Blockchain
                                                                          </li>
                                                                        </ul>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            AI search
                                                                          </li>
                                                                        </ul>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            AI automation
                                                                          </li>
                                                                        </ul>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            Machine learning models
                                                                          </li>
                                                                        </ul>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            Natural language
                                                                            processing
                                                                          </li>
                                                                        </ul>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            Text analysis
                                                                          </li>
                                                                        </ul>
                                                                        <div>
                                                                          <strong>
                                                                            How We Process Your Data
                                                                            Using AI
                                                                          </strong>
                                                                        </div>
                                                                        <div>
                                                                          All personal information
                                                                          processed using our AI
                                                                          Products is handled in
                                                                          line with our Privacy
                                                                          Notice and our agreement
                                                                          with third parties. This
                                                                          ensures high security and
                                                                          safeguards your personal
                                                                          information throughout the
                                                                          process, giving you peace
                                                                          of mind about your data's
                                                                          safety.
                                                                        </div>
                                                                        <div>
                                                                          <h2 id="sociallogins">
                                                                            7. HOW DO WE HANDLE YOUR
                                                                            SOCIAL LOGINS?
                                                                          </h2>
                                                                          <strong>
                                                                            <em>In Short:&nbsp;</em>
                                                                          </strong>
                                                                          <em>
                                                                            If you choose to
                                                                            register or log in to
                                                                            our Services using a
                                                                            social media account, we
                                                                            may have access to
                                                                            certain information
                                                                            about you.
                                                                          </em>
                                                                        </div>
                                                                        <div>
                                                                          Our Services offer you the
                                                                          ability to register and
                                                                          log in using your
                                                                          third-party social media
                                                                          account details (like your
                                                                          Facebook or X logins).
                                                                          Where you choose to do
                                                                          this, we will receive
                                                                          certain profile
                                                                          information about you from
                                                                          your social media
                                                                          provider. The profile
                                                                          information we receive may
                                                                          vary depending on the
                                                                          social media provider
                                                                          concerned, but will often
                                                                          include your name, email
                                                                          address, friends list, and
                                                                          profile picture, as well
                                                                          as other information you
                                                                          choose to make public on
                                                                          such a social media
                                                                          platform.
                                                                        </div>
                                                                        <div>
                                                                          We will use the
                                                                          information we receive
                                                                          only for the purposes that
                                                                          are described in this
                                                                          Privacy Notice or that are
                                                                          otherwise made clear to
                                                                          you on the relevant
                                                                          Services. Please note that
                                                                          we do not control, and are
                                                                          not responsible for, other
                                                                          uses of your personal
                                                                          information by your
                                                                          third-party social media
                                                                          provider. We recommend
                                                                          that you review their
                                                                          privacy notice to
                                                                          understand how they
                                                                          collect, use, and share
                                                                          your personal information,
                                                                          and how you can set your
                                                                          privacy preferences on
                                                                          their sites and apps.
                                                                        </div>
                                                                        <div>
                                                                          <h2 id="intltransfers">
                                                                            8. IS YOUR INFORMATION
                                                                            TRANSFERRED
                                                                            INTERNATIONALLY?
                                                                          </h2>
                                                                          <strong>
                                                                            <em>In Short:&nbsp;</em>
                                                                          </strong>
                                                                          <em>
                                                                            We may transfer, store,
                                                                            and process your
                                                                            information in countries
                                                                            other than your own.
                                                                          </em>
                                                                        </div>
                                                                        <div data-custom-class="body_text">
                                                                          Our servers are located in
                                                                          the United States, Canada
                                                                          and United Kingdom. If you
                                                                          are accessing our Services
                                                                          from outside the United
                                                                          States, Canada and United
                                                                          Kingdom, please be aware
                                                                          that your information may
                                                                          be transferred to, stored
                                                                          by, and processed by us in
                                                                          our facilities and in the
                                                                          facilities of the third
                                                                          parties with whom we may
                                                                          share your personal
                                                                          information (see "
                                                                          <a href="#whoshare">
                                                                            WHEN AND WITH WHOM DO WE
                                                                            SHARE YOUR PERSONAL
                                                                            INFORMATION?
                                                                          </a>
                                                                          " above), in&nbsp;and
                                                                          other countries.
                                                                        </div>
                                                                        <div>
                                                                          If you are a resident in
                                                                          the European Economic Area
                                                                          (EEA), United Kingdom
                                                                          (UK), or Switzerland, then
                                                                          these countries may not
                                                                          necessarily have data
                                                                          protection laws or other
                                                                          similar laws as
                                                                          comprehensive as those in
                                                                          your country. However, we
                                                                          will take all necessary
                                                                          measures to protect your
                                                                          personal information in
                                                                          accordance with this
                                                                          Privacy Notice and
                                                                          applicable law.
                                                                        </div>
                                                                        <div>
                                                                          European Commission's
                                                                          Standard Contractual
                                                                          Clauses:
                                                                        </div>
                                                                        <div>
                                                                          We have implemented
                                                                          measures to protect your
                                                                          personal information,
                                                                          including by using the
                                                                          European Commission's
                                                                          Standard Contractual
                                                                          Clauses for transfers of
                                                                          personal information
                                                                          between our group
                                                                          companies and between us
                                                                          and our third-party
                                                                          providers. These clauses
                                                                          require all recipients to
                                                                          protect all personal
                                                                          information that they
                                                                          process originating from
                                                                          the EEA or UK in
                                                                          accordance with European
                                                                          data protection laws and
                                                                          regulations.&nbsp;Our
                                                                          Standard Contractual
                                                                          Clauses can be provided
                                                                          upon request.&nbsp;We have
                                                                          implemented similar
                                                                          appropriate safeguards
                                                                          with our third-party
                                                                          service providers and
                                                                          partners and further
                                                                          details can be provided
                                                                          upon request.
                                                                        </div>
                                                                        <div>
                                                                          <h2 id="inforetain">
                                                                            9. HOW LONG DO WE KEEP
                                                                            YOUR INFORMATION?
                                                                          </h2>
                                                                          <strong>
                                                                            <em>In Short:&nbsp;</em>
                                                                          </strong>
                                                                          <em>
                                                                            We keep your information
                                                                            for as long as necessary
                                                                            to fulfill the purposes
                                                                            outlined in this Privacy
                                                                            Notice unless otherwise
                                                                            required by law.
                                                                          </em>
                                                                        </div>
                                                                        <div>
                                                                          We will only keep your
                                                                          personal information for
                                                                          as long as it is necessary
                                                                          for the purposes set out
                                                                          in this Privacy Notice,
                                                                          unless a longer retention
                                                                          period is required or
                                                                          permitted by law (such as
                                                                          tax, accounting, or other
                                                                          legal requirements). No
                                                                          purpose in this notice
                                                                          will require us keeping
                                                                          your personal information
                                                                          for longer than the period
                                                                          of time in which users
                                                                          have an account with us.
                                                                        </div>
                                                                        <div>
                                                                          When we have no ongoing
                                                                          legitimate business need
                                                                          to process your personal
                                                                          information, we will
                                                                          either delete or anonymize
                                                                          such information, or, if
                                                                          this is not possible (for
                                                                          example, because your
                                                                          personal information has
                                                                          been stored in backup
                                                                          archives), then we will
                                                                          securely store your
                                                                          personal information and
                                                                          isolate it from any
                                                                          further processing until
                                                                          deletion is possible.
                                                                        </div>
                                                                        <div>
                                                                          <h2 id="infosafe">
                                                                            10. HOW DO WE KEEP YOUR
                                                                            INFORMATION SAFE?
                                                                          </h2>
                                                                          <strong>
                                                                            <em>In Short:&nbsp;</em>
                                                                          </strong>
                                                                          <em>
                                                                            We aim to protect your
                                                                            personal information
                                                                            through a system of
                                                                            organizational and
                                                                            technical security
                                                                            measures.
                                                                          </em>
                                                                        </div>
                                                                        <div>
                                                                          We have implemented
                                                                          appropriate and reasonable
                                                                          technical and
                                                                          organizational security
                                                                          measures designed to
                                                                          protect the security of
                                                                          any personal information
                                                                          we process. However,
                                                                          despite our safeguards and
                                                                          efforts to secure your
                                                                          information, no electronic
                                                                          transmission over the
                                                                          Internet or information
                                                                          storage technology can be
                                                                          guaranteed to be 100%
                                                                          secure, so we cannot
                                                                          promise or guarantee that
                                                                          hackers, cybercriminals,
                                                                          or other unauthorized
                                                                          third parties will not be
                                                                          able to defeat our
                                                                          security and improperly
                                                                          collect, access, steal, or
                                                                          modify your information.
                                                                          Although we will do our
                                                                          best to protect your
                                                                          personal information,
                                                                          transmission of personal
                                                                          information to and from
                                                                          our Services is at your
                                                                          own risk. You should only
                                                                          access the Services within
                                                                          a secure environment.
                                                                        </div>
                                                                        <div>
                                                                          <h2 id="infominors">
                                                                            11. DO WE COLLECT
                                                                            INFORMATION FROM MINORS?
                                                                          </h2>
                                                                          <strong>
                                                                            <em>In Short:</em>
                                                                          </strong>
                                                                          <em>
                                                                            &nbsp;We do not
                                                                            knowingly collect data
                                                                            from or market to
                                                                            children under 18 years
                                                                            of age.
                                                                          </em>
                                                                        </div>
                                                                        <div>
                                                                          We do not knowingly
                                                                          collect, solicit data
                                                                          from, or market to
                                                                          children under 18 years of
                                                                          age, nor do we knowingly
                                                                          sell such personal
                                                                          information. By using the
                                                                          Services, you represent
                                                                          that you are at least 18
                                                                          or that you are the parent
                                                                          or guardian of such a
                                                                          minor and consent to such
                                                                          minor dependent&rsquo;s
                                                                          use of the Services. If we
                                                                          learn that personal
                                                                          information from users
                                                                          less than 18 years of age
                                                                          has been collected, we
                                                                          will deactivate the
                                                                          account and take
                                                                          reasonable measures to
                                                                          promptly delete such data
                                                                          from our records. If you
                                                                          become aware of any data
                                                                          we may have collected from
                                                                          children under age 18,
                                                                          please contact us at
                                                                          privacy@faya.chat.
                                                                        </div>
                                                                        <div>
                                                                          <h2 id="privacyrights">
                                                                            12. WHAT ARE YOUR
                                                                            PRIVACY RIGHTS?
                                                                          </h2>
                                                                          <strong>
                                                                            <em>In Short:</em>
                                                                          </strong>
                                                                          <em>
                                                                            &nbsp;Depending on your
                                                                            state of residence in
                                                                            the US or in some
                                                                            regions, such as the
                                                                            European Economic Area
                                                                            (EEA), United Kingdom
                                                                            (UK), Switzerland, and
                                                                            Canada, you have rights
                                                                            that allow you greater
                                                                            access to and control
                                                                            over your personal
                                                                            information.&nbsp;You
                                                                            may review, change, or
                                                                            terminate your account
                                                                            at any time, depending
                                                                            on your country,
                                                                            province, or state of
                                                                            residence.
                                                                          </em>
                                                                        </div>
                                                                        <div>
                                                                          In some regions (like the
                                                                          EEA, UK, Switzerland, and
                                                                          Canada), you have certain
                                                                          rights under applicable
                                                                          data protection laws.
                                                                          These may include the
                                                                          right (i) to request
                                                                          access and obtain a copy
                                                                          of your personal
                                                                          information, (ii) to
                                                                          request rectification or
                                                                          erasure; (iii) to restrict
                                                                          the processing of your
                                                                          personal information; (iv)
                                                                          if applicable, to data
                                                                          portability; and (v) not
                                                                          to be subject to automated
                                                                          decision-making. In
                                                                          certain circumstances, you
                                                                          may also have the right to
                                                                          object to the processing
                                                                          of your personal
                                                                          information. You can make
                                                                          such a request by
                                                                          contacting us by using the
                                                                          contact details provided
                                                                          in the section "
                                                                          <a href="#contact">
                                                                            HOW CAN YOU CONTACT US
                                                                            ABOUT THIS NOTICE?
                                                                          </a>
                                                                          " below.
                                                                        </div>
                                                                        <div>
                                                                          We will consider and act
                                                                          upon any request in
                                                                          accordance with applicable
                                                                          data protection laws.
                                                                        </div>
                                                                        <div>
                                                                          If you are located in the
                                                                          EEA or UK and you believe
                                                                          we are unlawfully
                                                                          processing your personal
                                                                          information, you also have
                                                                          the right to complain to
                                                                          your{' '}
                                                                          <a
                                                                            href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                                                                            rel="noopener noreferrer"
                                                                            target="_blank"
                                                                          >
                                                                            Member State data
                                                                            protection authority
                                                                          </a>{' '}
                                                                          or&nbsp;
                                                                          <a
                                                                            href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
                                                                            rel="noopener noreferrer"
                                                                            target="_blank"
                                                                          >
                                                                            UK data protection
                                                                            authority
                                                                          </a>
                                                                          .
                                                                        </div>
                                                                        <div>
                                                                          If you are located in
                                                                          Switzerland, you may
                                                                          contact the{' '}
                                                                          <a
                                                                            href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                                                                            rel="noopener noreferrer"
                                                                            target="_blank"
                                                                          >
                                                                            Federal Data Protection
                                                                            and Information
                                                                            Commissioner
                                                                          </a>
                                                                          .
                                                                        </div>
                                                                        <div>
                                                                          <strong>
                                                                            <u>
                                                                              Withdrawing your
                                                                              consent:
                                                                            </u>
                                                                          </strong>{' '}
                                                                          If we are relying on your
                                                                          consent to process your
                                                                          personal information,
                                                                          which may be express
                                                                          and/or implied consent
                                                                          depending on the
                                                                          applicable law, you have
                                                                          the right to withdraw your
                                                                          consent at any time. You
                                                                          can withdraw your consent
                                                                          at any time by contacting
                                                                          us by using the contact
                                                                          details provided in the
                                                                          section "
                                                                          <a href="#contact">
                                                                            HOW CAN YOU CONTACT US
                                                                            ABOUT THIS NOTICE?
                                                                          </a>
                                                                          " below or updating your
                                                                          preferences.
                                                                        </div>
                                                                        <div>
                                                                          However, please note that
                                                                          this will not affect the
                                                                          lawfulness of the
                                                                          processing before its
                                                                          withdrawal nor, when
                                                                          applicable law allows,
                                                                          will it affect the
                                                                          processing of your
                                                                          personal information
                                                                          conducted in reliance on
                                                                          lawful processing grounds
                                                                          other than consent.
                                                                        </div>
                                                                        <div>
                                                                          <strong>
                                                                            <u>
                                                                              Opting out of
                                                                              marketing and
                                                                              promotional
                                                                              communications:
                                                                            </u>
                                                                          </strong>
                                                                          You can unsubscribe from
                                                                          our marketing and
                                                                          promotional communications
                                                                          at any time by clicking on
                                                                          the unsubscribe link in
                                                                          the emails that we send,
                                                                          or by contacting us using
                                                                          the details provided in
                                                                          the section "
                                                                          <a href="#contact">
                                                                            HOW CAN YOU CONTACT US
                                                                            ABOUT THIS NOTICE?
                                                                          </a>
                                                                          " below. You will then be
                                                                          removed from the marketing
                                                                          lists. However, we may
                                                                          still communicate with you
                                                                          &mdash; for example, to
                                                                          send you service-related
                                                                          messages that are
                                                                          necessary for the
                                                                          administration and use of
                                                                          your account, to respond
                                                                          to service requests, or
                                                                          for other non-marketing
                                                                          purposes.
                                                                          <h3>
                                                                            Account Information
                                                                          </h3>
                                                                          If you would at any time
                                                                          like to review or change
                                                                          the information in your
                                                                          account or terminate your
                                                                          account, you can:
                                                                        </div>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            Log in to your account
                                                                            settings and update your
                                                                            user account.
                                                                          </li>
                                                                        </ul>
                                                                        <div>
                                                                          Upon your request to
                                                                          terminate your account, we
                                                                          will deactivate or delete
                                                                          your account and
                                                                          information from our
                                                                          active databases. However,
                                                                          we may retain some
                                                                          information in our files
                                                                          to prevent fraud,
                                                                          troubleshoot problems,
                                                                          assist with any
                                                                          investigations, enforce
                                                                          our legal terms and/or
                                                                          comply with applicable
                                                                          legal requirements.
                                                                        </div>
                                                                        <div>
                                                                          <strong>
                                                                            <u>
                                                                              Cookies and similar
                                                                              technologies:
                                                                            </u>
                                                                          </strong>{' '}
                                                                          Most Web browsers are set
                                                                          to accept cookies by
                                                                          default. If you prefer,
                                                                          you can usually choose to
                                                                          set your browser to remove
                                                                          cookies and to reject
                                                                          cookies. If you choose to
                                                                          remove cookies or reject
                                                                          cookies, this could affect
                                                                          certain features or
                                                                          services of our
                                                                          Services.{' '}
                                                                        </div>
                                                                        <div>
                                                                          If you have questions or
                                                                          comments about your
                                                                          privacy rights, you may
                                                                          email us at
                                                                          privacy@faya.chat.
                                                                        </div>
                                                                        <div>
                                                                          <h2 id="DNT">
                                                                            13. CONTROLS FOR
                                                                            DO-NOT-TRACK FEATURES
                                                                          </h2>
                                                                          Most web browsers and some
                                                                          mobile operating systems
                                                                          and mobile applications
                                                                          include a Do-Not-Track
                                                                          ("DNT") feature or setting
                                                                          you can activate to signal
                                                                          your privacy preference
                                                                          not to have data about
                                                                          your online browsing
                                                                          activities monitored and
                                                                          collected. At this stage,
                                                                          no uniform technology
                                                                          standard for recognizing
                                                                          and implementing DNT
                                                                          signals has been
                                                                          finalized. As such, we do
                                                                          not currently respond to
                                                                          DNT browser signals or any
                                                                          other mechanism that
                                                                          automatically communicates
                                                                          your choice not to be
                                                                          tracked online. If a
                                                                          standard for online
                                                                          tracking is adopted that
                                                                          we must follow in the
                                                                          future, we will inform you
                                                                          about that practice in a
                                                                          revised version of this
                                                                          Privacy Notice.
                                                                        </div>
                                                                        <div>
                                                                          California law requires us
                                                                          to let you know how we
                                                                          respond to web browser DNT
                                                                          signals. Because there
                                                                          currently is not an
                                                                          industry or legal standard
                                                                          for recognizing or
                                                                          honoring DNT signals, we
                                                                          do not respond to them at
                                                                          this time.
                                                                        </div>
                                                                        <div>
                                                                          <h2 id="uslaws">
                                                                            14. DO UNITED STATES
                                                                            RESIDENTS HAVE SPECIFIC
                                                                            PRIVACY RIGHTS?
                                                                          </h2>
                                                                          <strong>
                                                                            <em>In Short:&nbsp;</em>
                                                                          </strong>
                                                                          <em>
                                                                            If you are a resident of
                                                                            California, Colorado,
                                                                            Connecticut, Delaware,
                                                                            Florida, Indiana, Iowa,
                                                                            Kentucky, Maryland,
                                                                            Minnesota, Montana,
                                                                            Nebraska, New Hampshire,
                                                                            New Jersey, Oregon,
                                                                            Rhode Island, Tennessee,
                                                                            Texas, Utah, or
                                                                            Virginia, you may have
                                                                            the right to request
                                                                            access to and receive
                                                                            details about the
                                                                            personal information we
                                                                            maintain about you and
                                                                            how we have processed
                                                                            it, correct
                                                                            inaccuracies, get a copy
                                                                            of, or delete your
                                                                            personal information.
                                                                            You may also have the
                                                                            right to withdraw your
                                                                            consent to our
                                                                            processing of your
                                                                            personal information.
                                                                            These rights may be
                                                                            limited in some
                                                                            circumstances by
                                                                            applicable law. More
                                                                            information is provided
                                                                            below.
                                                                          </em>
                                                                          <h3>
                                                                            Categories of Personal
                                                                            Information We Collect
                                                                          </h3>
                                                                          We have collected the
                                                                          following categories of
                                                                          personal information in
                                                                          the past twelve (12)
                                                                          months:
                                                                        </div>
                                                                        <table>
                                                                          <thead>
                                                                            <tr>
                                                                              <th>
                                                                                <strong>
                                                                                  Category
                                                                                </strong>
                                                                              </th>
                                                                              <th>
                                                                                <strong>
                                                                                  Examples
                                                                                </strong>
                                                                              </th>
                                                                              <th>
                                                                                <strong>
                                                                                  Collected
                                                                                </strong>
                                                                              </th>
                                                                            </tr>
                                                                          </thead>
                                                                          <tbody>
                                                                            <tr>
                                                                              <td>
                                                                                <div>
                                                                                  A. Identifiers
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div>
                                                                                  Contact details,
                                                                                  such as real name,
                                                                                  alias, postal
                                                                                  address, telephone
                                                                                  or mobile contact
                                                                                  number, unique
                                                                                  personal
                                                                                  identifier, online
                                                                                  identifier,
                                                                                  Internet Protocol
                                                                                  address, email
                                                                                  address, and
                                                                                  account name
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div>NO</div>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                        <table>
                                                                          <tbody>
                                                                            <tr>
                                                                              <td>
                                                                                <div>
                                                                                  B. Personal
                                                                                  information as
                                                                                  defined in the
                                                                                  California
                                                                                  Customer Records
                                                                                  statute
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div>
                                                                                  Name, contact
                                                                                  information,
                                                                                  education,
                                                                                  employment,
                                                                                  employment
                                                                                  history, and
                                                                                  financial
                                                                                  information
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div>NO</div>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                        <table>
                                                                          <tbody>
                                                                            <tr>
                                                                              <td>
                                                                                <div>
                                                                                  C. Protected
                                                                                  classification
                                                                                  characteristics
                                                                                  under state or
                                                                                  federal law
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div>
                                                                                  Gender, age, date
                                                                                  of birth, race and
                                                                                  ethnicity,
                                                                                  national origin,
                                                                                  marital status,
                                                                                  and other
                                                                                  demographic data
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div data-custom-class="body_text">
                                                                                  NO
                                                                                </div>
                                                                              </td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td>
                                                                                <div>
                                                                                  D. Commercial
                                                                                  information
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div>
                                                                                  Transaction
                                                                                  information,
                                                                                  purchase history,
                                                                                  financial details,
                                                                                  and payment
                                                                                  information
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div data-custom-class="body_text">
                                                                                  NO
                                                                                </div>
                                                                              </td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td>
                                                                                <div>
                                                                                  E. Biometric
                                                                                  information
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div>
                                                                                  Fingerprints and
                                                                                  voiceprints
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div data-custom-class="body_text">
                                                                                  NO
                                                                                </div>
                                                                              </td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td>
                                                                                <div>
                                                                                  F. Internet or
                                                                                  other similar
                                                                                  network activity
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div>
                                                                                  Browsing history,
                                                                                  search history,
                                                                                  online behavior,
                                                                                  interest data, and
                                                                                  interactions with
                                                                                  our and other
                                                                                  websites,
                                                                                  applications,
                                                                                  systems, and
                                                                                  advertisements
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div data-custom-class="body_text">
                                                                                  NO
                                                                                </div>
                                                                              </td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td>
                                                                                <div>
                                                                                  G. Geolocation
                                                                                  data
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div>
                                                                                  Device location
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div data-custom-class="body_text">
                                                                                  NO
                                                                                </div>
                                                                              </td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td>
                                                                                <div>
                                                                                  H. Audio,
                                                                                  electronic,
                                                                                  sensory, or
                                                                                  similar
                                                                                  information
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div>
                                                                                  Images and audio,
                                                                                  video or call
                                                                                  recordings created
                                                                                  in connection with
                                                                                  our business
                                                                                  activities
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div data-custom-class="body_text">
                                                                                  NO
                                                                                </div>
                                                                              </td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td>
                                                                                <div>
                                                                                  I. Professional or
                                                                                  employment-related
                                                                                  information
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div>
                                                                                  Business contact
                                                                                  details in order
                                                                                  to provide you our
                                                                                  Services at a
                                                                                  business level or
                                                                                  job title, work
                                                                                  history, and
                                                                                  professional
                                                                                  qualifications if
                                                                                  you apply for a
                                                                                  job with us
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div data-custom-class="body_text">
                                                                                  NO
                                                                                </div>
                                                                              </td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td>
                                                                                <div>
                                                                                  J. Education
                                                                                  Information
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div>
                                                                                  Student records
                                                                                  and directory
                                                                                  information
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div data-custom-class="body_text">
                                                                                  NO
                                                                                </div>
                                                                              </td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td>
                                                                                <div>
                                                                                  K. Inferences
                                                                                  drawn from
                                                                                  collected personal
                                                                                  information
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div>
                                                                                  Inferences drawn
                                                                                  from any of the
                                                                                  collected personal
                                                                                  information listed
                                                                                  above to create a
                                                                                  profile or summary
                                                                                  about, for
                                                                                  example, an
                                                                                  individual&rsquo;s
                                                                                  preferences and
                                                                                  characteristics
                                                                                </div>
                                                                              </td>
                                                                              <td>
                                                                                <div data-custom-class="body_text">
                                                                                  YES
                                                                                </div>
                                                                              </td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td>
                                                                                L. Sensitive
                                                                                personal Information
                                                                              </td>
                                                                              <td>
                                                                                <div
                                                                                  data-custom-class="body_text"
                                                                                  data-empty="true"
                                                                                >
                                                                                  NO
                                                                                </div>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                        <div>
                                                                          We may also collect other
                                                                          personal information
                                                                          outside of these
                                                                          categories through
                                                                          instances where you
                                                                          interact with us in
                                                                          person, online, or by
                                                                          phone or mail in the
                                                                          context of:
                                                                        </div>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            Receiving help through
                                                                            our customer support
                                                                            channels;
                                                                          </li>
                                                                        </ul>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            Participation in
                                                                            customer surveys or
                                                                            contests; and
                                                                          </li>
                                                                        </ul>
                                                                        <ul>
                                                                          <li data-custom-class="body_text">
                                                                            Facilitation in the
                                                                            delivery of our Services
                                                                            and to respond to your
                                                                            inquiries.
                                                                          </li>
                                                                        </ul>
                                                                        <div>
                                                                          We will use and retain the
                                                                          collected personal
                                                                          information as needed to
                                                                          provide the Services or
                                                                          for:
                                                                          <div>
                                                                            <div>
                                                                              <div>
                                                                                <div>
                                                                                  <div>
                                                                                    <div>
                                                                                      <ul>
                                                                                        <li data-custom-class="body_text">
                                                                                          Category H
                                                                                          - As long
                                                                                          as the
                                                                                          user has
                                                                                          an account
                                                                                          with us
                                                                                        </li>
                                                                                      </ul>
                                                                                      <div>
                                                                                        <div>
                                                                                          <ul>
                                                                                            <li data-custom-class="body_text">
                                                                                              Category
                                                                                              K - As
                                                                                              long
                                                                                              as the
                                                                                              user
                                                                                              has an
                                                                                              account
                                                                                              with
                                                                                              us
                                                                                            </li>
                                                                                          </ul>
                                                                                          <div>
                                                                                            <div>
                                                                                              <h3>
                                                                                                Sources
                                                                                                of
                                                                                                Personal
                                                                                                Information
                                                                                              </h3>
                                                                                              Learn
                                                                                              more
                                                                                              about
                                                                                              the
                                                                                              sources
                                                                                              of
                                                                                              personal
                                                                                              information
                                                                                              we
                                                                                              collect
                                                                                              in "
                                                                                              <a href="#infocollect">
                                                                                                WHAT
                                                                                                INFORMATION
                                                                                                DO
                                                                                                WE
                                                                                                COLLECT?
                                                                                              </a>
                                                                                              "
                                                                                              <h3>
                                                                                                How
                                                                                                We
                                                                                                Use
                                                                                                and
                                                                                                Share
                                                                                                Personal
                                                                                                Information
                                                                                              </h3>
                                                                                              Learn
                                                                                              more
                                                                                              about
                                                                                              how we
                                                                                              use
                                                                                              your
                                                                                              personal
                                                                                              information
                                                                                              in the
                                                                                              section,
                                                                                              "
                                                                                              <a href="#infouse">
                                                                                                HOW
                                                                                                DO
                                                                                                WE
                                                                                                PROCESS
                                                                                                YOUR
                                                                                                INFORMATION?
                                                                                              </a>
                                                                                              "
                                                                                            </div>
                                                                                            <div>
                                                                                              <strong>
                                                                                                Will
                                                                                                your
                                                                                                information
                                                                                                be
                                                                                                shared
                                                                                                with
                                                                                                anyone
                                                                                                else?
                                                                                              </strong>
                                                                                            </div>
                                                                                            <div>
                                                                                              We may
                                                                                              disclose
                                                                                              your
                                                                                              personal
                                                                                              information
                                                                                              with
                                                                                              our
                                                                                              service
                                                                                              providers
                                                                                              pursuant
                                                                                              to a
                                                                                              written
                                                                                              contract
                                                                                              between
                                                                                              us and
                                                                                              each
                                                                                              service
                                                                                              provider.
                                                                                              Learn
                                                                                              more
                                                                                              about
                                                                                              how we
                                                                                              disclose
                                                                                              personal
                                                                                              information
                                                                                              to in
                                                                                              the
                                                                                              section,
                                                                                              "
                                                                                              <a href="#whoshare">
                                                                                                WHEN
                                                                                                AND
                                                                                                WITH
                                                                                                WHOM
                                                                                                DO
                                                                                                WE
                                                                                                SHARE
                                                                                                YOUR
                                                                                                PERSONAL
                                                                                                INFORMATION?
                                                                                              </a>
                                                                                              "
                                                                                            </div>
                                                                                            <div>
                                                                                              We may
                                                                                              use
                                                                                              your
                                                                                              personal
                                                                                              information
                                                                                              for
                                                                                              our
                                                                                              own
                                                                                              business
                                                                                              purposes,
                                                                                              such
                                                                                              as for
                                                                                              undertaking
                                                                                              internal
                                                                                              research
                                                                                              for
                                                                                              technological
                                                                                              development
                                                                                              and
                                                                                              demonstration.
                                                                                              This
                                                                                              is not
                                                                                              considered
                                                                                              to be
                                                                                              "selling"
                                                                                              of
                                                                                              your
                                                                                              personal
                                                                                              information.
                                                                                            </div>
                                                                                            <div>
                                                                                              We
                                                                                              have
                                                                                              not
                                                                                              disclosed,
                                                                                              sold,
                                                                                              or
                                                                                              shared
                                                                                              any
                                                                                              personal
                                                                                              information
                                                                                              to
                                                                                              third
                                                                                              parties
                                                                                              for a
                                                                                              business
                                                                                              or
                                                                                              commercial
                                                                                              purpose
                                                                                              in the
                                                                                              preceding
                                                                                              twelve
                                                                                              (12)
                                                                                              months.
                                                                                              We&nbsp;will
                                                                                              not
                                                                                              sell
                                                                                              or
                                                                                              share
                                                                                              personal
                                                                                              information
                                                                                              in the
                                                                                              future
                                                                                              belonging
                                                                                              to
                                                                                              website
                                                                                              visitors,
                                                                                              users,
                                                                                              and
                                                                                              other
                                                                                              consumers.
                                                                                            </div>
                                                                                            <div>
                                                                                              <h3>
                                                                                                Your
                                                                                                Rights
                                                                                              </h3>
                                                                                              You
                                                                                              have
                                                                                              rights
                                                                                              under
                                                                                              certain
                                                                                              US
                                                                                              state
                                                                                              data
                                                                                              protection
                                                                                              laws.
                                                                                              However,
                                                                                              these
                                                                                              rights
                                                                                              are
                                                                                              not
                                                                                              absolute,
                                                                                              and in
                                                                                              certain
                                                                                              cases,
                                                                                              we may
                                                                                              decline
                                                                                              your
                                                                                              request
                                                                                              as
                                                                                              permitted
                                                                                              by
                                                                                              law.
                                                                                              These
                                                                                              rights
                                                                                              include:
                                                                                            </div>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                <strong>
                                                                                                  Right
                                                                                                  to
                                                                                                  know
                                                                                                </strong>{' '}
                                                                                                whether
                                                                                                or
                                                                                                not
                                                                                                we
                                                                                                are
                                                                                                processing
                                                                                                your
                                                                                                personal
                                                                                                data
                                                                                              </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                <strong>
                                                                                                  Right
                                                                                                  to
                                                                                                  access&nbsp;
                                                                                                </strong>
                                                                                                your
                                                                                                personal
                                                                                                data
                                                                                              </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                <strong>
                                                                                                  Right
                                                                                                  to
                                                                                                  correct&nbsp;
                                                                                                </strong>
                                                                                                inaccuracies
                                                                                                in
                                                                                                your
                                                                                                personal
                                                                                                data
                                                                                              </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                <strong>
                                                                                                  Right
                                                                                                  to
                                                                                                  request
                                                                                                </strong>{' '}
                                                                                                the
                                                                                                deletion
                                                                                                of
                                                                                                your
                                                                                                personal
                                                                                                data
                                                                                              </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                <strong>
                                                                                                  Right
                                                                                                  to
                                                                                                  obtain
                                                                                                  a
                                                                                                  copy&nbsp;
                                                                                                </strong>
                                                                                                of
                                                                                                the
                                                                                                personal
                                                                                                data
                                                                                                you
                                                                                                previously
                                                                                                shared
                                                                                                with
                                                                                                us
                                                                                              </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                <strong>
                                                                                                  Right
                                                                                                  to
                                                                                                  non-discrimination
                                                                                                </strong>{' '}
                                                                                                for
                                                                                                exercising
                                                                                                your
                                                                                                rights
                                                                                              </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                <strong>
                                                                                                  Right
                                                                                                  to
                                                                                                  opt
                                                                                                  out
                                                                                                </strong>{' '}
                                                                                                of
                                                                                                the
                                                                                                processing
                                                                                                of
                                                                                                your
                                                                                                personal
                                                                                                data
                                                                                                if
                                                                                                it
                                                                                                is
                                                                                                used
                                                                                                for
                                                                                                targeted
                                                                                                advertising
                                                                                                (or
                                                                                                sharing
                                                                                                as
                                                                                                defined
                                                                                                under
                                                                                                California&rsquo;s
                                                                                                privacy
                                                                                                law),
                                                                                                the
                                                                                                sale
                                                                                                of
                                                                                                personal
                                                                                                data,
                                                                                                or
                                                                                                profiling
                                                                                                in
                                                                                                furtherance
                                                                                                of
                                                                                                decisions
                                                                                                that
                                                                                                produce
                                                                                                legal
                                                                                                or
                                                                                                similarly
                                                                                                significant
                                                                                                effects
                                                                                                ("profiling")
                                                                                              </li>
                                                                                            </ul>
                                                                                            <div>
                                                                                              Depending
                                                                                              upon
                                                                                              the
                                                                                              state
                                                                                              where
                                                                                              you
                                                                                              live,
                                                                                              you
                                                                                              may
                                                                                              also
                                                                                              have
                                                                                              the
                                                                                              following
                                                                                              rights:
                                                                                            </div>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                Right
                                                                                                to
                                                                                                access
                                                                                                the
                                                                                                categories
                                                                                                of
                                                                                                personal
                                                                                                data
                                                                                                being
                                                                                                processed
                                                                                                (as
                                                                                                permitted
                                                                                                by
                                                                                                applicable
                                                                                                law,
                                                                                                including
                                                                                                the
                                                                                                privacy
                                                                                                law
                                                                                                in
                                                                                                Minnesota)
                                                                                              </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                Right
                                                                                                to
                                                                                                obtain
                                                                                                a
                                                                                                list
                                                                                                of
                                                                                                the
                                                                                                categories
                                                                                                of
                                                                                                third
                                                                                                parties
                                                                                                to
                                                                                                which
                                                                                                we
                                                                                                have
                                                                                                disclosed
                                                                                                personal
                                                                                                data
                                                                                                (as
                                                                                                permitted
                                                                                                by
                                                                                                applicable
                                                                                                law,
                                                                                                including
                                                                                                the
                                                                                                privacy
                                                                                                law
                                                                                                in
                                                                                                California,
                                                                                                Delaware,
                                                                                                and
                                                                                                Maryland)
                                                                                              </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                Right
                                                                                                to
                                                                                                obtain
                                                                                                a
                                                                                                list
                                                                                                of
                                                                                                specific
                                                                                                third
                                                                                                parties
                                                                                                to
                                                                                                which
                                                                                                we
                                                                                                have
                                                                                                disclosed
                                                                                                personal
                                                                                                data
                                                                                                (as
                                                                                                permitted
                                                                                                by
                                                                                                applicable
                                                                                                law,
                                                                                                including
                                                                                                the
                                                                                                privacy
                                                                                                law
                                                                                                in
                                                                                                Minnesota
                                                                                                and
                                                                                                Oregon)
                                                                                              </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                Right
                                                                                                to
                                                                                                review,
                                                                                                understand,
                                                                                                question,
                                                                                                and
                                                                                                correct
                                                                                                how
                                                                                                personal
                                                                                                data
                                                                                                has
                                                                                                been
                                                                                                profiled
                                                                                                (as
                                                                                                permitted
                                                                                                by
                                                                                                applicable
                                                                                                law,
                                                                                                including
                                                                                                the
                                                                                                privacy
                                                                                                law
                                                                                                in
                                                                                                Minnesota)
                                                                                              </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                Right
                                                                                                to
                                                                                                limit
                                                                                                use
                                                                                                and
                                                                                                disclosure
                                                                                                of
                                                                                                sensitive
                                                                                                personal
                                                                                                data
                                                                                                (as
                                                                                                permitted
                                                                                                by
                                                                                                applicable
                                                                                                law,
                                                                                                including
                                                                                                the
                                                                                                privacy
                                                                                                law
                                                                                                in
                                                                                                California)
                                                                                              </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                Right
                                                                                                to
                                                                                                opt
                                                                                                out
                                                                                                of
                                                                                                the
                                                                                                collection
                                                                                                of
                                                                                                sensitive
                                                                                                data
                                                                                                and
                                                                                                personal
                                                                                                data
                                                                                                collected
                                                                                                through
                                                                                                the
                                                                                                operation
                                                                                                of a
                                                                                                voice
                                                                                                or
                                                                                                facial
                                                                                                recognition
                                                                                                feature
                                                                                                (as
                                                                                                permitted
                                                                                                by
                                                                                                applicable
                                                                                                law,
                                                                                                including
                                                                                                the
                                                                                                privacy
                                                                                                law
                                                                                                in
                                                                                                Florida)
                                                                                              </li>
                                                                                            </ul>
                                                                                            <div>
                                                                                              <h3>
                                                                                                How
                                                                                                to
                                                                                                Exercise
                                                                                                Your
                                                                                                Rights
                                                                                              </h3>
                                                                                              To
                                                                                              exercise
                                                                                              these
                                                                                              rights,
                                                                                              you
                                                                                              can
                                                                                              contact
                                                                                              us by
                                                                                              submitting
                                                                                              a&nbsp;
                                                                                              <a
                                                                                                href="https://app.termly.io/notify/f5cb15cb-97bd-49e3-9b2c-760f565ea77d"
                                                                                                rel="noopener noreferrer"
                                                                                                target="_blank"
                                                                                              >
                                                                                                data
                                                                                                subject
                                                                                                access
                                                                                                request
                                                                                              </a>
                                                                                              , by
                                                                                              emailing
                                                                                              us at
                                                                                              privacy@hello.chat,
                                                                                              or by
                                                                                              referring
                                                                                              to the
                                                                                              contact
                                                                                              details
                                                                                              at the
                                                                                              bottom
                                                                                              of
                                                                                              this
                                                                                              document.
                                                                                            </div>
                                                                                            <div>
                                                                                              We
                                                                                              will
                                                                                              honor
                                                                                              your
                                                                                              opt-out
                                                                                              preferences
                                                                                              if you
                                                                                              enact
                                                                                              the&nbsp;
                                                                                              <a
                                                                                                href="https://globalprivacycontrol.org/"
                                                                                                rel="noopener noreferrer"
                                                                                                target="_blank"
                                                                                              >
                                                                                                Global
                                                                                                Privacy
                                                                                                Control
                                                                                              </a>
                                                                                              &nbsp;(GPC)
                                                                                              opt-out
                                                                                              signal
                                                                                              on
                                                                                              your
                                                                                              browser.
                                                                                            </div>
                                                                                            <div>
                                                                                              Under
                                                                                              certain
                                                                                              US
                                                                                              state
                                                                                              data
                                                                                              protection
                                                                                              laws,
                                                                                              you
                                                                                              can
                                                                                              designate
                                                                                              an
                                                                                              authorized
                                                                                              agent
                                                                                              to
                                                                                              make a
                                                                                              request
                                                                                              on
                                                                                              your
                                                                                              behalf.
                                                                                              We may
                                                                                              deny a
                                                                                              request
                                                                                              from
                                                                                              an
                                                                                              authorized
                                                                                              agent
                                                                                              that
                                                                                              does
                                                                                              not
                                                                                              submit
                                                                                              proof
                                                                                              that
                                                                                              they
                                                                                              have
                                                                                              been
                                                                                              validly
                                                                                              authorized
                                                                                              to act
                                                                                              on
                                                                                              your
                                                                                              behalf
                                                                                              in
                                                                                              accordance
                                                                                              with
                                                                                              applicable
                                                                                              laws.
                                                                                              <br />
                                                                                              <h3>
                                                                                                Request
                                                                                                Verification
                                                                                              </h3>
                                                                                              Upon
                                                                                              receiving
                                                                                              your
                                                                                              request,
                                                                                              we
                                                                                              will
                                                                                              need
                                                                                              to
                                                                                              verify
                                                                                              your
                                                                                              identity
                                                                                              to
                                                                                              determine
                                                                                              you
                                                                                              are
                                                                                              the
                                                                                              same
                                                                                              person
                                                                                              about
                                                                                              whom
                                                                                              we
                                                                                              have
                                                                                              the
                                                                                              information
                                                                                              in our
                                                                                              system.
                                                                                              We
                                                                                              will
                                                                                              only
                                                                                              use
                                                                                              personal
                                                                                              information
                                                                                              provided
                                                                                              in
                                                                                              your
                                                                                              request
                                                                                              to
                                                                                              verify
                                                                                              your
                                                                                              identity
                                                                                              or
                                                                                              authority
                                                                                              to
                                                                                              make
                                                                                              the
                                                                                              request.
                                                                                              However,
                                                                                              if we
                                                                                              cannot
                                                                                              verify
                                                                                              your
                                                                                              identity
                                                                                              from
                                                                                              the
                                                                                              information
                                                                                              already
                                                                                              maintained
                                                                                              by us,
                                                                                              we may
                                                                                              request
                                                                                              that
                                                                                              you
                                                                                              provide
                                                                                              additional
                                                                                              information
                                                                                              for
                                                                                              the
                                                                                              purposes
                                                                                              of
                                                                                              verifying
                                                                                              your
                                                                                              identity
                                                                                              and
                                                                                              for
                                                                                              security
                                                                                              or
                                                                                              fraud-prevention
                                                                                              purposes.
                                                                                            </div>
                                                                                            <div>
                                                                                              If you
                                                                                              submit
                                                                                              the
                                                                                              request
                                                                                              through
                                                                                              an
                                                                                              authorized
                                                                                              agent,
                                                                                              we may
                                                                                              need
                                                                                              to
                                                                                              collect
                                                                                              additional
                                                                                              information
                                                                                              to
                                                                                              verify
                                                                                              your
                                                                                              identity
                                                                                              before
                                                                                              processing
                                                                                              your
                                                                                              request
                                                                                              and
                                                                                              the
                                                                                              agent
                                                                                              will
                                                                                              need
                                                                                              to
                                                                                              provide
                                                                                              a
                                                                                              written
                                                                                              and
                                                                                              signed
                                                                                              permission
                                                                                              from
                                                                                              you to
                                                                                              submit
                                                                                              such
                                                                                              request
                                                                                              on
                                                                                              your
                                                                                              behalf.
                                                                                              <h3>
                                                                                                Appeals
                                                                                              </h3>
                                                                                              Under
                                                                                              certain
                                                                                              US
                                                                                              state
                                                                                              data
                                                                                              protection
                                                                                              laws,
                                                                                              if we
                                                                                              decline
                                                                                              to
                                                                                              take
                                                                                              action
                                                                                              regarding
                                                                                              your
                                                                                              request,
                                                                                              you
                                                                                              may
                                                                                              appeal
                                                                                              our
                                                                                              decision
                                                                                              by
                                                                                              emailing
                                                                                              us at
                                                                                              privacy@faya.chat.
                                                                                              We
                                                                                              will
                                                                                              inform
                                                                                              you in
                                                                                              writing
                                                                                              of any
                                                                                              action
                                                                                              taken
                                                                                              or not
                                                                                              taken
                                                                                              in
                                                                                              response
                                                                                              to the
                                                                                              appeal,
                                                                                              including
                                                                                              a
                                                                                              written
                                                                                              explanation
                                                                                              of the
                                                                                              reasons
                                                                                              for
                                                                                              the
                                                                                              decisions.
                                                                                              If
                                                                                              your
                                                                                              appeal
                                                                                              is
                                                                                              denied,
                                                                                              you
                                                                                              may
                                                                                              submit
                                                                                              a
                                                                                              complaint
                                                                                              to
                                                                                              your
                                                                                              state
                                                                                              attorney
                                                                                              general.
                                                                                              <h3>
                                                                                                California
                                                                                                "Shine
                                                                                                The
                                                                                                Light"
                                                                                                Law
                                                                                              </h3>
                                                                                              California
                                                                                              Civil
                                                                                              Code
                                                                                              Section
                                                                                              1798.83,
                                                                                              also
                                                                                              known
                                                                                              as the
                                                                                              "Shine
                                                                                              The
                                                                                              Light"
                                                                                              law,
                                                                                              permits
                                                                                              our
                                                                                              users
                                                                                              who
                                                                                              are
                                                                                              California
                                                                                              residents
                                                                                              to
                                                                                              request
                                                                                              and
                                                                                              obtain
                                                                                              from
                                                                                              us,
                                                                                              once a
                                                                                              year
                                                                                              and
                                                                                              free
                                                                                              of
                                                                                              charge,
                                                                                              information
                                                                                              about
                                                                                              categories
                                                                                              of
                                                                                              personal
                                                                                              information
                                                                                              (if
                                                                                              any)
                                                                                              we
                                                                                              disclosed
                                                                                              to
                                                                                              third
                                                                                              parties
                                                                                              for
                                                                                              direct
                                                                                              marketing
                                                                                              purposes
                                                                                              and
                                                                                              the
                                                                                              names
                                                                                              and
                                                                                              addresses
                                                                                              of all
                                                                                              third
                                                                                              parties
                                                                                              with
                                                                                              which
                                                                                              we
                                                                                              shared
                                                                                              personal
                                                                                              information
                                                                                              in the
                                                                                              immediately
                                                                                              preceding
                                                                                              calendar
                                                                                              year.
                                                                                              If you
                                                                                              are a
                                                                                              California
                                                                                              resident
                                                                                              and
                                                                                              would
                                                                                              like
                                                                                              to
                                                                                              make
                                                                                              such a
                                                                                              request,
                                                                                              please
                                                                                              submit
                                                                                              your
                                                                                              request
                                                                                              in
                                                                                              writing
                                                                                              to us
                                                                                              by
                                                                                              using
                                                                                              the
                                                                                              contact
                                                                                              details
                                                                                              provided
                                                                                              in the
                                                                                              section
                                                                                              "
                                                                                              <a href="#contact">
                                                                                                HOW
                                                                                                CAN
                                                                                                YOU
                                                                                                CONTACT
                                                                                                US
                                                                                                ABOUT
                                                                                                THIS
                                                                                                NOTICE?
                                                                                              </a>
                                                                                              "
                                                                                            </div>
                                                                                            <div>
                                                                                              <h2 id="otherlaws">
                                                                                                15.
                                                                                                DO
                                                                                                OTHER
                                                                                                REGIONS
                                                                                                HAVE
                                                                                                SPECIFIC
                                                                                                PRIVACY
                                                                                                RIGHTS?
                                                                                              </h2>
                                                                                              <em>
                                                                                                <strong>
                                                                                                  In
                                                                                                  Short:
                                                                                                </strong>
                                                                                                &nbsp;You
                                                                                                may
                                                                                                have
                                                                                                additional
                                                                                                rights
                                                                                                based
                                                                                                on
                                                                                                the
                                                                                                country
                                                                                                you
                                                                                                reside
                                                                                                in.
                                                                                              </em>
                                                                                            </div>
                                                                                            <div>
                                                                                              <h3>
                                                                                                <strong>
                                                                                                  Australia
                                                                                                </strong>{' '}
                                                                                                <strong>
                                                                                                  and
                                                                                                </strong>{' '}
                                                                                                <strong>
                                                                                                  New
                                                                                                  Zealand
                                                                                                </strong>
                                                                                              </h3>
                                                                                            </div>
                                                                                            <div>
                                                                                              We
                                                                                              collect
                                                                                              and
                                                                                              process
                                                                                              your
                                                                                              personal
                                                                                              information
                                                                                              under
                                                                                              the
                                                                                              obligations
                                                                                              and
                                                                                              conditions
                                                                                              set by
                                                                                              Australia's
                                                                                              Privacy
                                                                                              Act
                                                                                              1988
                                                                                              and
                                                                                              New
                                                                                              Zealand's
                                                                                              Privacy
                                                                                              Act
                                                                                              2020
                                                                                              (Privacy
                                                                                              Act).
                                                                                            </div>
                                                                                            <div>
                                                                                              This
                                                                                              Privacy
                                                                                              Notice
                                                                                              satisfies
                                                                                              the
                                                                                              notice
                                                                                              requirements
                                                                                              defined
                                                                                              in
                                                                                              both
                                                                                              Privacy
                                                                                              Acts,
                                                                                              in
                                                                                              particular:
                                                                                              what
                                                                                              personal
                                                                                              information
                                                                                              we
                                                                                              collect
                                                                                              from
                                                                                              you,
                                                                                              from
                                                                                              which
                                                                                              sources,
                                                                                              for
                                                                                              which
                                                                                              purposes,
                                                                                              and
                                                                                              other
                                                                                              recipients
                                                                                              of
                                                                                              your
                                                                                              personal
                                                                                              information.
                                                                                            </div>
                                                                                            <div>
                                                                                              If you
                                                                                              do not
                                                                                              wish
                                                                                              to
                                                                                              provide
                                                                                              the
                                                                                              personal
                                                                                              information
                                                                                              necessary
                                                                                              to
                                                                                              fulfill
                                                                                              their
                                                                                              applicable
                                                                                              purpose,
                                                                                              it may
                                                                                              affect
                                                                                              our
                                                                                              ability
                                                                                              to
                                                                                              provide
                                                                                              our
                                                                                              services,
                                                                                              in
                                                                                              particular:
                                                                                            </div>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                offer
                                                                                                you
                                                                                                the
                                                                                                products
                                                                                                or
                                                                                                services
                                                                                                that
                                                                                                you
                                                                                                want
                                                                                              </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                respond
                                                                                                to
                                                                                                or
                                                                                                help
                                                                                                with
                                                                                                your
                                                                                                requests
                                                                                              </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                manage
                                                                                                your
                                                                                                account
                                                                                                with
                                                                                                us
                                                                                              </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                              <li data-custom-class="body_text">
                                                                                                confirm
                                                                                                your
                                                                                                identity
                                                                                                and
                                                                                                protect
                                                                                                your
                                                                                                account
                                                                                              </li>
                                                                                            </ul>
                                                                                            <div>
                                                                                              At any
                                                                                              time,
                                                                                              you
                                                                                              have
                                                                                              the
                                                                                              right
                                                                                              to
                                                                                              request
                                                                                              access
                                                                                              to or
                                                                                              correction
                                                                                              of
                                                                                              your
                                                                                              personal
                                                                                              information.
                                                                                              You
                                                                                              can
                                                                                              make
                                                                                              such a
                                                                                              request
                                                                                              by
                                                                                              contacting
                                                                                              us by
                                                                                              using
                                                                                              the
                                                                                              contact
                                                                                              details
                                                                                              provided
                                                                                              in the
                                                                                              section
                                                                                              "
                                                                                              <a href="#request">
                                                                                                HOW
                                                                                                CAN
                                                                                                YOU
                                                                                                REVIEW,
                                                                                                UPDATE,
                                                                                                OR
                                                                                                DELETE
                                                                                                THE
                                                                                                DATA
                                                                                                WE
                                                                                                COLLECT
                                                                                                FROM
                                                                                                YOU?
                                                                                              </a>
                                                                                              "
                                                                                            </div>
                                                                                            <div>
                                                                                              If you
                                                                                              believe
                                                                                              we are
                                                                                              unlawfully
                                                                                              processing
                                                                                              your
                                                                                              personal
                                                                                              information,
                                                                                              you
                                                                                              have
                                                                                              the
                                                                                              right
                                                                                              to
                                                                                              submit
                                                                                              a
                                                                                              complaint
                                                                                              about
                                                                                              a
                                                                                              breach
                                                                                              of the
                                                                                              Australian
                                                                                              Privacy
                                                                                              Principles
                                                                                              to the{' '}
                                                                                              <a
                                                                                                href="https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us"
                                                                                                rel="noopener noreferrer"
                                                                                                target="_blank"
                                                                                              >
                                                                                                Office
                                                                                                of
                                                                                                the
                                                                                                Australian
                                                                                                Information
                                                                                                Commissioner
                                                                                              </a>{' '}
                                                                                              and a
                                                                                              breach
                                                                                              of New
                                                                                              Zealand's
                                                                                              Privacy
                                                                                              Principles
                                                                                              to the{' '}
                                                                                              <a
                                                                                                href="https://www.privacy.org.nz/your-rights/making-a-complaint/"
                                                                                                rel="noopener noreferrer"
                                                                                                target="_blank"
                                                                                              >
                                                                                                Office
                                                                                                of
                                                                                                New
                                                                                                Zealand
                                                                                                Privacy
                                                                                                Commissioner
                                                                                              </a>
                                                                                              .
                                                                                              <h3>
                                                                                                Republic
                                                                                                of
                                                                                                South
                                                                                                Africa
                                                                                              </h3>
                                                                                              At any
                                                                                              time,
                                                                                              you
                                                                                              have
                                                                                              the
                                                                                              right
                                                                                              to
                                                                                              request
                                                                                              access
                                                                                              to or
                                                                                              correction
                                                                                              of
                                                                                              your
                                                                                              personal
                                                                                              information.
                                                                                              You
                                                                                              can
                                                                                              make
                                                                                              such a
                                                                                              request
                                                                                              by
                                                                                              contacting
                                                                                              us by
                                                                                              using
                                                                                              the
                                                                                              contact
                                                                                              details
                                                                                              provided
                                                                                              in the
                                                                                              section
                                                                                              "
                                                                                              <a href="#request">
                                                                                                HOW
                                                                                                CAN
                                                                                                YOU
                                                                                                REVIEW,
                                                                                                UPDATE,
                                                                                                OR
                                                                                                DELETE
                                                                                                THE
                                                                                                DATA
                                                                                                WE
                                                                                                COLLECT
                                                                                                FROM
                                                                                                YOU?
                                                                                              </a>
                                                                                              "
                                                                                            </div>
                                                                                            <div>
                                                                                              If you
                                                                                              are
                                                                                              unsatisfied
                                                                                              with
                                                                                              the
                                                                                              manner
                                                                                              in
                                                                                              which
                                                                                              we
                                                                                              address
                                                                                              any
                                                                                              complaint
                                                                                              with
                                                                                              regard
                                                                                              to our
                                                                                              processing
                                                                                              of
                                                                                              personal
                                                                                              information,
                                                                                              you
                                                                                              can
                                                                                              contact
                                                                                              the
                                                                                              office
                                                                                              of the
                                                                                              regulator,
                                                                                              the
                                                                                              details
                                                                                              of
                                                                                              which
                                                                                              are:
                                                                                            </div>
                                                                                            <div>
                                                                                              <a
                                                                                                href="https://inforegulator.org.za/"
                                                                                                rel="noopener noreferrer"
                                                                                                target="_blank"
                                                                                              >
                                                                                                The
                                                                                                Information
                                                                                                Regulator
                                                                                                (South
                                                                                                Africa)
                                                                                              </a>
                                                                                            </div>
                                                                                            <div>
                                                                                              General
                                                                                              enquiries:&nbsp;
                                                                                              <a
                                                                                                href="mailto:enquiries@inforegulator.org.za"
                                                                                                rel="noopener noreferrer"
                                                                                                target="_blank"
                                                                                              >
                                                                                                enquiries@inforegulator.org.za
                                                                                              </a>
                                                                                            </div>
                                                                                            <div>
                                                                                              Complaints
                                                                                              (complete
                                                                                              POPIA/PAIA
                                                                                              form
                                                                                              5):&nbsp;
                                                                                              <a
                                                                                                href="mailto:PAIAComplaints@inforegulator.org.za"
                                                                                                rel="noopener noreferrer"
                                                                                                target="_blank"
                                                                                              >
                                                                                                PAIAComplaints@inforegulator.org.za
                                                                                              </a>
                                                                                              &nbsp;&amp;&nbsp;
                                                                                              <a
                                                                                                href="mailto:POPIAComplaints@inforegulator.org.za"
                                                                                                rel="noopener noreferrer"
                                                                                                target="_blank"
                                                                                              >
                                                                                                POPIAComplaints@inforegulator.org.za
                                                                                              </a>
                                                                                            </div>
                                                                                            <div>
                                                                                              <h2 id="policyupdates">
                                                                                                16.
                                                                                                DO
                                                                                                WE
                                                                                                MAKE
                                                                                                UPDATES
                                                                                                TO
                                                                                                THIS
                                                                                                NOTICE?
                                                                                              </h2>
                                                                                              <em>
                                                                                                <strong>
                                                                                                  In
                                                                                                  Short:&nbsp;
                                                                                                </strong>
                                                                                                Yes,
                                                                                                we
                                                                                                will
                                                                                                update
                                                                                                this
                                                                                                notice
                                                                                                as
                                                                                                necessary
                                                                                                to
                                                                                                stay
                                                                                                compliant
                                                                                                with
                                                                                                relevant
                                                                                                laws.
                                                                                              </em>
                                                                                            </div>
                                                                                            <div>
                                                                                              We may
                                                                                              update
                                                                                              this
                                                                                              Privacy
                                                                                              Notice
                                                                                              from
                                                                                              time
                                                                                              to
                                                                                              time.
                                                                                              The
                                                                                              updated
                                                                                              version
                                                                                              will
                                                                                              be
                                                                                              indicated
                                                                                              by an
                                                                                              updated
                                                                                              "Revised"
                                                                                              date
                                                                                              at the
                                                                                              top of
                                                                                              this
                                                                                              Privacy
                                                                                              Notice.
                                                                                              If we
                                                                                              make
                                                                                              material
                                                                                              changes
                                                                                              to
                                                                                              this
                                                                                              Privacy
                                                                                              Notice,
                                                                                              we may
                                                                                              notify
                                                                                              you
                                                                                              either
                                                                                              by
                                                                                              prominently
                                                                                              posting
                                                                                              a
                                                                                              notice
                                                                                              of
                                                                                              such
                                                                                              changes
                                                                                              or by
                                                                                              directly
                                                                                              sending
                                                                                              you a
                                                                                              notification.
                                                                                              We
                                                                                              encourage
                                                                                              you to
                                                                                              review
                                                                                              this
                                                                                              Privacy
                                                                                              Notice
                                                                                              frequently
                                                                                              to be
                                                                                              informed
                                                                                              of how
                                                                                              we are
                                                                                              protecting
                                                                                              your
                                                                                              information.
                                                                                            </div>
                                                                                            <div>
                                                                                              <h2 id="contact">
                                                                                                17.
                                                                                                HOW
                                                                                                CAN
                                                                                                YOU
                                                                                                CONTACT
                                                                                                US
                                                                                                ABOUT
                                                                                                THIS
                                                                                                NOTICE?
                                                                                              </h2>
                                                                                              If you
                                                                                              have
                                                                                              questions
                                                                                              or
                                                                                              comments
                                                                                              about
                                                                                              this
                                                                                              notice,
                                                                                              you
                                                                                              may
                                                                                              email
                                                                                              us at
                                                                                              privacy@faya.chat
                                                                                              or&nbsp;contact
                                                                                              us by
                                                                                              post
                                                                                              at:
                                                                                            </div>
                                                                                            <div>
                                                                                              MC2
                                                                                              (MCrowdsourcing
                                                                                              Canada
                                                                                              Inc.)
                                                                                            </div>
                                                                                            <div>
                                                                                              150
                                                                                              Elgin
                                                                                              St,
                                                                                              Ottawa,
                                                                                              ON K2P
                                                                                              2P8,
                                                                                              Canada
                                                                                            </div>
                                                                                            <div>
                                                                                              Floor
                                                                                              10
                                                                                            </div>
                                                                                            <div>
                                                                                              Ottawa,
                                                                                              Ontario
                                                                                              K2P
                                                                                              2P8
                                                                                            </div>
                                                                                            <div>
                                                                                              Canada
                                                                                            </div>
                                                                                            <div>
                                                                                              <h2 id="request">
                                                                                                18.
                                                                                                HOW
                                                                                                CAN
                                                                                                YOU
                                                                                                REVIEW,
                                                                                                UPDATE,
                                                                                                OR
                                                                                                DELETE
                                                                                                THE
                                                                                                DATA
                                                                                                WE
                                                                                                COLLECT
                                                                                                FROM
                                                                                                YOU?
                                                                                              </h2>
                                                                                              Based
                                                                                              on the
                                                                                              applicable
                                                                                              laws
                                                                                              of
                                                                                              your
                                                                                              country
                                                                                              or
                                                                                              state
                                                                                              of
                                                                                              residence
                                                                                              in the
                                                                                              US,
                                                                                              you
                                                                                              may
                                                                                              have
                                                                                              the
                                                                                              right
                                                                                              to
                                                                                              request
                                                                                              access
                                                                                              to the
                                                                                              personal
                                                                                              information
                                                                                              we
                                                                                              collect
                                                                                              from
                                                                                              you,
                                                                                              details
                                                                                              about
                                                                                              how we
                                                                                              have
                                                                                              processed
                                                                                              it,
                                                                                              correct
                                                                                              inaccuracies,
                                                                                              or
                                                                                              delete
                                                                                              your
                                                                                              personal
                                                                                              information.
                                                                                              You
                                                                                              may
                                                                                              also
                                                                                              have
                                                                                              the
                                                                                              right
                                                                                              to
                                                                                              withdraw
                                                                                              your
                                                                                              consent
                                                                                              to our
                                                                                              processing
                                                                                              of
                                                                                              your
                                                                                              personal
                                                                                              information.
                                                                                              These
                                                                                              rights
                                                                                              may be
                                                                                              limited
                                                                                              in
                                                                                              some
                                                                                              circumstances
                                                                                              by
                                                                                              applicable
                                                                                              law.
                                                                                              To
                                                                                              request
                                                                                              to
                                                                                              review,
                                                                                              update,
                                                                                              or
                                                                                              delete
                                                                                              your
                                                                                              personal
                                                                                              information,
                                                                                              please
                                                                                              fill
                                                                                              out
                                                                                              and
                                                                                              submit
                                                                                              a&nbsp;
                                                                                              <a
                                                                                                href="https://app.termly.io/notify/f5cb15cb-97bd-49e3-9b2c-760f565ea77d"
                                                                                                rel="noopener noreferrer"
                                                                                                target="_blank"
                                                                                              >
                                                                                                data
                                                                                                subject
                                                                                                access
                                                                                                request
                                                                                              </a>
                                                                                              .
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </Flexbox>
    </>
  );
};

export default Page;
