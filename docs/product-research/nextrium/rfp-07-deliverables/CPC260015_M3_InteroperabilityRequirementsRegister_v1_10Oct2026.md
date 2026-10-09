---
title: "Interoperability Requirements Register - NexTrium Milestone 3 (CPC-26-0015)"
sidebar_label: "Interoperability Requirements Register"
---

**NEXTRIUM**

Global Innovations Ltd

**Interoperability Requirements Register**

*Ranked register of interoperability features requested by builders, operators and providers*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D3 (Proposal Section 13)                                                        |
| **Status**                | Draft for Milestone 3; final at Milestone 4                                     |
| **Version**               | 1.0                                                                             |
| **Date**                  | 10 October 2026                                                                 |
| **Confidentiality**       | Summary public; this full version is redacted for publication |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This is the draft Interoperability Requirements Register (D3). It ranks the interoperability features that respondents asked for and records who needs each, on which pathway, how often it was raised, how urgent it is and what happens without it. It answers Decision Gate 5.

Respondents who chose anonymised or confidential treatment are identified by category only, and confidential statements are not included.

**1. Summary**

**Main findings**

1. **Wallet access is the most requested and most blocking area.** Mobile wallet connection is the only requirement currently blocking deployment, and basic-phone access and seed-free onboarding are among the most frequent requests.
2. **Identity is the most frequently raised requirement.** Seven builders and providers need identity verification linked to national ID systems, or a reusable digital identity.
3. **Bridging and messaging requests come mainly from one provider and from non-Cardano builders.** They are conditions for considering Cardano more than current blockers, and are held at Low confidence.
4. **All seven interoperability feature types are evidenced.** Message passing and wallet user experience, which desk research could not evidence, are now supported by interviews.

**Decisions this supports**

Gate 5: which interoperability features builders and operators actually need, so investment can go to wallet, identity, settlement, bridging, messaging, liquidity or partner-chain work in line with observed demand.

**2. Method**

**How to read the register**

- Each requirement is a feature that builders, operators or providers asked for, with the interview extracts behind it.
- Fields follow our proposal (Section 13, D3) and RFP 07 Appendix D. Frequency is the number of respondents raising the requirement. Urgency is High, Medium or Low. Blocker status is Blocking, Important, Nice-to-have or Unknown.
- Requirements are ranked by blocker status, then frequency, then urgency.
- "Mixed" means some respondents treat the requirement as must-have and others as nice-to-have; the note says which.
- Confidence follows the Research Design Document (Section 6.2). Provider-side requirements are held at Low because one Category 3 provider was interviewed against a committed five to eight.
- Insider and external evidence: requirements raised by non-Cardano builders (Category 4) are identified as such in the frequency field.

**3. Ranked Register**

| Rank | Requested feature | Feature type | Frequency | Urgency | Blocker status | Must-have or nice-to-have | Confidence |
|---|---|---|---|---|---|---|---|
| 1 | Mobile wallet connection for applications | Wallet user experience | 3 builders | High | Blocking | Must-have | Medium |
| 2 | Identity verification linked to national ID systems, and reusable digital identity | Identity and data portability | 7 builders and providers | Medium | Important | Mixed | Medium |
| 3 | Basic-phone and offline access (USSD, phone-number addressing) | Wallet user experience | 6 builders (2 have built their own: E-256, E-489) | Medium | Important | Mixed | Medium |
| 4 | Wallet onboarding without seed phrases | Wallet user experience | 3 (2 Cardano builders, 1 non-Cardano) | Medium | Important | Must-have | Medium |
| 5 | Robust bridging of tokens between chains | Asset bridging | 3 (1 provider, 2 non-Cardano builders) | Medium | Important | Must-have | Low |
| 6 | Custom, sensor and real-world data feeds | Identity and data portability | 3 | Medium | Important | Must-have | Medium |
| 7 | Integration with local payment rails | Settlement interoperability | 3 | Medium | Important | Must-have | Medium |
| 8 | Stablecoin integration in applications | Liquidity routing | 3 | Low | Important | Must-have | Medium |
| 9 | Cross-chain messaging | Message passing | 2 | Medium | Important | Must-have | Low |
| 10 | Layer 2 partner chains for time-sensitive services | Partner-chain integration | 1 | Medium | Important | Must-have | Low |
| 11 | Swapping tokens from other chains into Cardano assets without first buying ADA | Liquidity routing | 3 (1 Cardano builder; 2 non-Cardano operators, one already offers this elsewhere) | Low | Nice-to-have | Nice-to-have | Medium |
| 12 | Selective privacy through a partner chain | Partner-chain integration | 2 | Low | Nice-to-have | Nice-to-have | Low |
| 13 | Chainlink and Circle's Cross-Chain Transfer Protocol | Asset bridging | 1 | Low | Nice-to-have | Nice-to-have | Low |
| 14 | Capturing user details with token claims | Identity and data portability | 1 | Low | Nice-to-have | Nice-to-have | Low |

**4. Requirement Detail**

### 1. Mobile wallet connection for applications

| Field | Detail |
|---|---|
| Feature type | Wallet user experience |
| User or operator type | Cardano application builders serving phone-first users |
| Chain, corridor or pathway | Cardano wallets to mobile applications (native wallet connect) |
| Frequency | 3 builders |
| Urgency | High |
| Blocker status | Blocking |
| Must-have or nice-to-have | Must-have |
| Adoption consequence | Phone-first users cannot use applications that only connect to wallets on a computer. |
| Evidence source | E-038, E-071, E-432; T-009 |
| Confidence | Medium |
| Respondents | R-002 Olivier MWATSIMULAMO (Wednesday marketplace) (Category 1); R-004 Emmanuel Asaolu (UTXOS) (Category 1); R-027 (Category 2, anonymised) |
| Note | Blocking for one marketplace (E-038). |

### 2. Identity verification linked to national ID systems, and reusable digital identity

| Field | Detail |
|---|---|
| Feature type | Identity and data portability |
| User or operator type | Cardano application builders needing KYC |
| Chain, corridor or pathway | National ID systems (NIN, BVN, TIN, national ID cards) to Cardano applications |
| Frequency | 7 builders and providers |
| Urgency | Medium |
| Blocker status | Important |
| Must-have or nice-to-have | Mixed |
| Adoption consequence | Builders verify users through third-party KYC or not at all; onboarding is repeated for each application and is harder where national ID is weak. |
| Evidence source | E-039, E-072, E-219, E-240, E-258, E-338, E-493; Desk Research Summary Section 4.4 |
| Confidence | Medium |
| Respondents | R-002 Olivier MWATSIMULAMO (Wednesday marketplace) (Category 1); R-004 Emmanuel Asaolu (UTXOS) (Category 1); R-015 Mubarak Oladimeji (organisation undisclosed under NDA) (Category 1); R-016 (Category 1, anonymised); R-017 Issah Abagna (Abagna Salifu Issah; hatchery management platform, Ghana) (Category 1); R-021 Adam Dean (DripDropz, and multiple other Cardano tooling projects: Onboard Ninja, Veraraglyph, Buffybot Publishing, Hydra Events, Ecclesia) (Category 2); R-031 Kamal Aliyu (SAPro, escrow platform for African informal market) (Category 1) |
| Note | Must-have for marketplace trust (E-039); a preference for reusable identity elsewhere (E-493). |

### 3. Basic-phone and offline access (USSD, phone-number addressing)

| Field | Detail |
|---|---|
| Feature type | Wallet user experience |
| User or operator type | Cardano builders serving users without smartphones or internet |
| Chain, corridor or pathway | Cardano to mobile network USSD and phone-number channels |
| Frequency | 6 builders (2 have built their own: E-256, E-489) |
| Urgency | Medium |
| Blocker status | Important |
| Must-have or nice-to-have | Mixed |
| Adoption consequence | Users without smartphones or internet cannot be reached unless each builder builds its own USSD layer. |
| Evidence source | E-022, E-041, E-237, E-256, E-257, E-276, E-351, E-489; Desk Research Summary Section 3.13 |
| Confidence | Medium |
| Respondents | R-001 Paul Mupenda (Category 1); R-002 Olivier MWATSIMULAMO (Wednesday marketplace) (Category 1); R-016 (Category 1, anonymised); R-017 Issah Abagna (Abagna Salifu Issah; hatchery management platform, Ghana) (Category 1); R-018 Ishmeal Mihsin / Muhsin Ismail (blockchain land-registration platform, northern Ghana) (Category 1); R-022 Solomon Salifu (North Bits / Tamil Hub, Smart Hatch poultry value-chain platform, northern Ghana) (Category 1) |
| Note | Must-have for four builders; conditional for two (E-237, E-276). |

### 4. Wallet onboarding without seed phrases

| Field | Detail |
|---|---|
| Feature type | Wallet user experience |
| User or operator type | Builders of consumer applications; a non-Cardano builder |
| Chain, corridor or pathway | Cardano wallets to first-time users |
| Frequency | 3 (2 Cardano builders, 1 non-Cardano) |
| Urgency | Medium |
| Blocker status | Important |
| Must-have or nice-to-have | Must-have |
| Adoption consequence | First-time users find seed-phrase wallets too technical, which slows onboarding. |
| Evidence source | E-020, E-021, E-055, E-305; social-login workaround E-060 |
| Confidence | Medium |
| Respondents | R-001 Paul Mupenda (Category 1); R-003 Kadiri Ahmed Tunde (Cardano Bounties) (Category 1); R-020 Peter June (Appour, NDA/privacy verification app, built on Midnight) (Category 4) |
| Note | One builder already offers social login as a workaround (E-060). |

### 5. Robust bridging of tokens between chains

| Field | Detail |
|---|---|
| Feature type | Asset bridging |
| User or operator type | Partner-chain project; non-Cardano builders |
| Chain, corridor or pathway | Cardano to partner chains and EVM chains |
| Frequency | 3 (1 provider, 2 non-Cardano builders) |
| Urgency | Medium |
| Blocker status | Important |
| Must-have or nice-to-have | Must-have |
| Adoption consequence | Unsafe or slow bridging limits cross-chain use and is a condition non-Cardano builders set for considering Cardano. |
| Evidence source | E-291, E-304, E-480; Desk Research Summary Sections 4.8, 4.10 |
| Confidence | Low |
| Respondents | R-019 Idongesit Ekpanya (contributor to a global multi-chain builder ecosystem project, built on Solana) (Category 4); R-020 Peter June (Appour, NDA/privacy verification app, built on Midnight) (Category 4); R-030 Jerry Fragiskatos (Apex Fusion, Co-Founder; former Cardano Chief Commercial Officer) (Category 3) |
| Note | Provider-side finding held at Low (one Category 3 interview). |

### 6. Custom, sensor and real-world data feeds

| Field | Detail |
|---|---|
| Feature type | Identity and data portability |
| User or operator type | Oracle providers and the builders they serve |
| Chain, corridor or pathway | Off-chain data sources to Cardano contracts |
| Frequency | 3 |
| Urgency | Medium |
| Blocker status | Important |
| Must-have or nice-to-have | Must-have |
| Adoption consequence | Builders who need sensor, derivative or real-world asset data cannot obtain it through native oracles. |
| Evidence source | E-093, E-099, E-102, E-348; Desk Research Summary Sections 6.3, 6.10 |
| Confidence | Medium |
| Respondents | R-005 Charli3 / Robert Hever (Category 2); R-006 Orcfax / Ross Spencer (Technical Lead) (Category 2); R-022 Solomon Salifu (North Bits / Tamil Hub, Smart Hatch poultry value-chain platform, northern Ghana) (Category 1) |

### 7. Integration with local payment rails

| Field | Detail |
|---|---|
| Feature type | Settlement interoperability |
| User or operator type | Cardano payment and escrow builders; a non-Cardano builder |
| Chain, corridor or pathway | Cardano to banks, mobile money and local payment providers |
| Frequency | 3 |
| Urgency | Medium |
| Blocker status | Important |
| Must-have or nice-to-have | Must-have |
| Adoption consequence | Builders route payments through aggregators or licensed intermediaries at extra cost, or pause Cardano integration. |
| Evidence source | E-009, E-012, E-017, E-448, E-495; Desk Research Summary Section 4.6 |
| Confidence | Medium |
| Respondents | R-001 Paul Mupenda (Category 1); R-028 cheto ekoja "praise" (Pop Shane) (Category 4); R-031 Kamal Aliyu (SAPro, escrow platform for African informal market) (Category 1) |
| Note | Closely tied to the compliance barriers routed to RFP 6. |

### 8. Stablecoin integration in applications

| Field | Detail |
|---|---|
| Feature type | Liquidity routing |
| User or operator type | Cardano application builders |
| Chain, corridor or pathway | Cardano-native stablecoins (USDCx, USDA, USDM) into applications |
| Frequency | 3 |
| Urgency | Low |
| Blocker status | Important |
| Must-have or nice-to-have | Must-have |
| Adoption consequence | Without stablecoins, applications expose users to ADA price volatility. |
| Evidence source | E-015, E-035, E-428; Desk Research Summary Sections 4.10, 8.5 |
| Confidence | Medium |
| Respondents | R-001 Paul Mupenda (Category 1); R-002 Olivier MWATSIMULAMO (Wednesday marketplace) (Category 1); R-027 (Category 2, anonymised) |
| Note | Stablecoins are live on Cardano; the requirement is integration and liquidity depth (Desk Research Summary 8.5). |

### 9. Cross-chain messaging

| Field | Detail |
|---|---|
| Feature type | Message passing |
| User or operator type | Partner-chain project; Cardano builders |
| Chain, corridor or pathway | LayerZero between Cardano and other chains |
| Frequency | 2 |
| Urgency | Medium |
| Blocker status | Important |
| Must-have or nice-to-have | Must-have |
| Adoption consequence | Cross-chain applications wait on a Cardano-side messaging integration that is still in development. |
| Evidence source | E-231, E-473; Desk Research Summary Sections 3.13, 4.9 |
| Confidence | Low |
| Respondents | R-016 (Category 1, anonymised); R-030 Jerry Fragiskatos (Apex Fusion, Co-Founder; former Cardano Chief Commercial Officer) (Category 3) |
| Note | Provider-side evidence held at Low. |

### 10. Layer 2 partner chains for time-sensitive services

| Field | Detail |
|---|---|
| Feature type | Partner-chain integration |
| User or operator type | Oracle and DeFi providers |
| Chain, corridor or pathway | Cardano to Layer 2 partner chains |
| Frequency | 1 |
| Urgency | Medium |
| Blocker status | Important |
| Must-have or nice-to-have | Must-have |
| Adoption consequence | Oracle and DeFi services need shorter block times than Layer 1 offers. |
| Evidence source | E-085; Desk Research Summary Section 3.7 |
| Confidence | Low |
| Respondents | R-005 Charli3 / Robert Hever (Category 2) |
| Note | Single source. |

### 11. Swapping tokens from other chains into Cardano assets without first buying ADA

| Field | Detail |
|---|---|
| Feature type | Liquidity routing |
| User or operator type | Cardano builder; non-Cardano operators |
| Chain, corridor or pathway | Ethereum and other chains to Cardano-native assets |
| Frequency | 3 (1 Cardano builder; 2 non-Cardano operators, one already offers this elsewhere) |
| Urgency | Low |
| Blocker status | Nice-to-have |
| Must-have or nice-to-have | Nice-to-have |
| Adoption consequence | Users holding assets on other chains must first acquire ADA, which adds a step before using Cardano applications. |
| Evidence source | E-183, E-417, E-462 |
| Confidence | Medium |
| Respondents | R-011 Emuesiri Amrohore / Siri.Dev (on-chain property verification platform) (Category 1); R-026 Mark Ajekevwoda (Moy Pay, CTO) (Category 4); R-029 Nero (Enwefah Allen Oghenerho) (Category 4) |
| Note | Conditional for one operator (E-417). |

### 12. Selective privacy through a partner chain

| Field | Detail |
|---|---|
| Feature type | Partner-chain integration |
| User or operator type | Cardano builders |
| Chain, corridor or pathway | Midnight to Cardano applications |
| Frequency | 2 |
| Urgency | Low |
| Blocker status | Nice-to-have |
| Must-have or nice-to-have | Nice-to-have |
| Adoption consequence | Builders who want users to control what they disclose would add privacy features in future. |
| Evidence source | E-179, E-404 |
| Confidence | Low |
| Respondents | R-011 Emuesiri Amrohore / Siri.Dev (on-chain property verification platform) (Category 1); R-025 Manuel Emenike (prediction market platform, ADA short-timeframe price predictions) (Category 1) |
| Note | Future interest; not implemented. |

### 13. Chainlink and Circle's Cross-Chain Transfer Protocol

| Field | Detail |
|---|---|
| Feature type | Asset bridging |
| User or operator type | Partner-chain project |
| Chain, corridor or pathway | Cardano to Chainlink CCIP and Circle CCTP |
| Frequency | 1 |
| Urgency | Low |
| Blocker status | Nice-to-have |
| Must-have or nice-to-have | Nice-to-have |
| Adoption consequence | Named by one provider as the two most important remaining integrations for Cardano. |
| Evidence source | E-482 |
| Confidence | Low |
| Respondents | R-030 Jerry Fragiskatos (Apex Fusion, Co-Founder; former Cardano Chief Commercial Officer) (Category 3) |
| Note | Respondent recommendation; provider-side finding held at Low. |

### 14. Capturing user details with token claims

| Field | Detail |
|---|---|
| Feature type | Identity and data portability |
| User or operator type | Token distribution provider |
| Chain, corridor or pathway | Cardano token-claiming standard |
| Frequency | 1 |
| Urgency | Low |
| Blocker status | Nice-to-have |
| Must-have or nice-to-have | Nice-to-have |
| Adoption consequence | Event token claims cannot capture user name, email or wallet type under the current standard. |
| Evidence source | E-318 |
| Confidence | Low |
| Respondents | R-021 Adam Dean (DripDropz, and multiple other Cardano tooling projects: Onboard Ninja, Veraraglyph, Buffybot Publishing, Hydra Events, Ecclesia) (Category 2) |
| Note | A standards gap, not a Cardano capability gap (E-318). |

**5. Coverage of the Seven Feature Types**

| Feature type | Requirements | Respondents raising it |
|---|---|---|
| Asset bridging | 2 | 3 |
| Message passing | 1 | 2 |
| Liquidity routing | 2 | 6 |
| Partner-chain integration | 2 | 3 |
| Wallet user experience | 3 | 10 |
| Identity and data portability | 3 | 10 |
| Settlement interoperability | 1 | 3 |

Every feature type has at least one evidenced requirement. Message passing and wallet user experience had no desk research conclusion at screening (Screening Report Section 3.1); both are now evidenced by interviews.

**6. Limitations**

**Limitations**

- One bridge, interoperability or wallet provider was interviewed against a committed five to eight, so provider-side requirements are held at Low confidence.
- Frequency counts respondents who raised a requirement, not the number of end users affected.
- Several requirements are conditional or future-facing; their blocker status reflects that.

**AI Use Disclaimer**

AI tools were used in the analysis and drafting behind this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.

**Document Version History**

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 10 October 2026 | Abdulbasit Adigun Abdulrahman | Draft for Milestone 3 |
