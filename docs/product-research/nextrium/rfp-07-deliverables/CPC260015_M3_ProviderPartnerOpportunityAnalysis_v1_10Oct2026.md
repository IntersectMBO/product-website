---
title: "Provider and Partner Opportunity Analysis - NexTrium Milestone 3 (CPC-26-0015)"
sidebar_label: "Provider and Partner Opportunity Analysis"
---

**NEXTRIUM**

Global Innovations Ltd

**Provider and Partner Opportunity Analysis**

*Assessment of bridge, interoperability, partner-chain, wallet and infrastructure providers relevant to Cardano's African emerging market opportunity*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Deliverable Reference** | D5 (Proposal Section 13)                                                        |
| **Status**                | Draft for Milestone 3; final at Milestone 4                                     |
| **Version**               | 1.0                                                                             |
| **Date**                  | 10 October 2026                                                                 |
| **Confidentiality**       | Summary public; this full version is redacted for publication                   |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Document Purpose**

This is the draft Provider and Partner Opportunity Analysis (D5). It assesses each provider and partner relevant to this research on the nine dimensions in RFP 07 Appendix F, recommends an action for each, and sets out why providers have not prioritised Cardano. It answers Decision Gates 8 and 9.

Respondents who chose anonymised or confidential treatment are identified by category only, and confidential statements are not included.

**1. Summary**

1. **No provider is ready for "fund now".** Every provider either is already funded or integrated and has not yet shown adoption, is not operating, or rests on evidence too thin to support new funding.
2. **Cardano's provider base is losing its native infrastructure.** One bridge is offline, one sidechain is shut down, and both Cardano-native oracle providers we interviewed are inactive or have moved their work to another chain. Both say commercial viability, not technology, was the cause.
3. **Integration is harder on Cardano, and the cost falls on the provider.** The one bridge and partner-chain provider interviewed took 6 to 12 months to integrate with Cardano, against 1 to 2 months for an equivalent EVM chain.
4. **Providers outside Cardano are not ruling it out on technology.** They are waiting for demand: users, trading volume and the support of the infrastructure partners they already use.
5. **The cheapest useful actions are coordination, not funding.** Examples are access to ecosystem decision-makers for a provider already building on Cardano technology, and tracking what happens to oracle supply when the funded free access period ends.
6. **All provider-side findings are Low confidence.** One bridge, interoperability or wallet provider was interviewed against a committed five to eight.

**Providers at a glance**

| # | Provider or partner | Type | Current Cardano status | Recommended action |
|---|---|---|---|---|
| 1 | LayerZero | Messaging | In phased delivery through 2026 | Monitor |
| 2 | Wanchain | Bridge | Cardano bridge offline since July 2026 | Defer |
| 3 | Rosen Bridge | Bridge | Operational | Monitor |
| 4 | Cardinal | Bridge | Operational, early-stage | Monitor |
| 5 | Bifrost | Bridge | Pre-mainnet | Monitor |
| 6 | Milkomeda C1 | Partner chain (EVM sidechain) | Shut down September 2025 | Reject |
| 7 | Apex Fusion | Partner chain and bridge | Live; tokens trade on Cardano | Coordinate |
| 8 | Circle USDCx | Other (stablecoin issuer) | Live since February 2026 | Monitor |
| 9 | Celo MiniPay | Wallet | No Cardano relationship | Reject |
| 10 | Cardano wallets (as a group) | Wallet | Live; no native mobile connection or phone-number addressing | Coordinate |
| 11 | Multi-chain wallet-infrastructure providers (as a group) | Wallet | Do not support Cardano (one operator's partners) | Defer |
| 12 | Pyth | Infra (oracle) | Live; free access for Cardano projects until around June 2027 | Monitor |
| 13 | Orcfax | Infra (oracle) | Not live | Monitor |
| 14 | Charli3 | Infra (oracle) | Ceased Cardano-focused operations May 2026 | Monitor |
| 15 | Blockfrost | Infra (API) | Operational | Monitor |
| 16 | Midnight | Partner chain | Live | Monitor |
| 17 | Partner Chains Toolkit | Partner chain (framework) | Available | Monitor |
| 18 | Masumi | Infra (agent payments) | Payment contracts on mainnet | Monitor |
| 19 | Fetch.ai and ASI Cloud | Infra (intelligence) | Not Cardano infrastructure | Defer |
| 20 | Hyperledger Identus | Infra (identity) | Available; no African deployment found | Monitor |
| 21 | Non-Cardano multi-chain tooling provider (R-008, anonymised) | Other | Not on Cardano; considering it | Monitor |

Every entry is Low confidence.

**2. Method**

- **Which providers.** Every bridge, interoperability, partner-chain, wallet and infrastructure provider named in our provider shortlist (Proposal Section 5), assessed in desk research (Desk Research Summary Sections 4 and 6) or screened as a pathway (Screening Report Section 3.2), and every provider that respondents described in enough detail to assess.
- **Nine dimensions for every entry** (RFP 07 Appendix F; Proposal Section 13): provider or partner type, current Cardano status, integration blocker, commercial incentive, technical effort, demand evidence, mutual benefit, risk and recommended action. Each entry also lists its evidence and confidence.
- **Type** uses the Appendix F types: bridge, messaging, wallet, partner chain, infra, other. **Technical effort** uses High, Medium or Low, and is stated only where there is evidence; otherwise it says "not assessed".
- **Recommended actions** use our pathway action set: fund now, coordinate, partner, monitor, defer or reject (Proposal Section 6). Where a provider is also a value-flow pathway, the action matches the Interoperability Value-Flow Assessment.
- **Why providers have not prioritised Cardano** (Gate 9) is tested against the eight explanations set out in our proposal: demand, integration cost, technical complexity, liquidity, security risk, incentive misalignment, commercial opportunity cost and lack of ecosystem support (Section 4 below).
- **Peer ecosystem benchmarking** comes from Desk Research Summary Section 8 and is applied only where it supports a recommendation (Section 5 below).
- **Status** was re-checked against public sources on 10 October 2026. Secondary sources are labelled as such.
- **Confidence.** Every entry is Low, because one Category 3 provider was interviewed against a committed five to eight (Stakeholder Access Status Update Section 4.2). Where builder-side demand evidence is stronger, the entry says so.

**Shortlisted but not assessed**

| Provider | Reason |
|---|---|
| XDAO | Named in our shortlist (Proposal Section 5). No interview or desk evidence was obtained, so no entry can be completed. Carried to the final version. |
| Swifin and Reltime | Reclassified from Cardano providers to non-Cardano operators during desk research, because they have no documented Cardano relationship (Desk Research Summary Section 4.12). |
| Chainlink and Circle CCTP | Recommended by one provider as the two most important remaining integrations for Cardano (E-480, E-482). Not assessed, because this is a single source and no further evidence was gathered. Carried to the final version. |

**3. Provider Entries**

### 1. LayerZero

| Dimension | Detail |
|---|---|
| Type | Messaging |
| Current Cardano status | In phased delivery. The Cardano Foundation's June 2026 update describes testnet and mainnet endpoints and the Stargate liquidity layer rolling out through 2026. |
| Integration blocker | Cross-chain tooling built for account-based chains needs fundamental rework for Cardano's eUTxO model, covering messaging, state management and replay protection (Desk Research Summary Sections 4.3, 9.6). |
| Commercial incentive | Delivered through the Cardano Critical Integrations programme (Desk Research Summary Section 4.9) |
| Technical effort | High. Intersect describes it as significantly more complex than the other integrations (Desk Research Summary Section 9.6). |
| Demand evidence | A partner-chain provider expects it to resolve most of Cardano's bridging-robustness gap (E-473); one builder is adopting it (E-231); others are aware of it but have not planned around it (E-396, E-428). |
| Mutual benefit | Access to the chains LayerZero connects; no observed flows yet (Interoperability Value-Flow Assessment: neutral-access, pending delivery) |
| Risk | Announcement and delivery have diverged since March 2026 (Desk Research Summary Section 4.9); cross-chain connectivity would rest on one external provider. |
| Recommended action | Monitor. It is already funded; reassess when mainnet delivery and flows exist. |
| Confidence | Low |

### 2. Wanchain

| Dimension | Detail |
|---|---|
| Type | Bridge |
| Current Cardano status | Cardano bridge offline since 21 July 2026. No reopening reported as at 10 October 2026; a post-mortem was still awaited (secondary sources). |
| Integration blocker | A Cardano-side contract flaw: messages were encoded without delimiters, so one signature could be reused for a much larger withdrawal. The Cardano function that prevents this was available and unused (Desk Research Summary Section 4.8). |
| Commercial incentive | Not evidenced |
| Technical effort | Not assessed |
| Demand evidence | None from respondents |
| Mutual benefit | None while offline |
| Risk | About 97% of the bridge's Cardano-side reserve was withdrawn in the exploit (Desk Research Summary Section 4.8). |
| Recommended action | Defer until the bridge reopens with stronger safeguards. |
| Confidence | Low |

### 3. Rosen Bridge

| Dimension | Detail |
|---|---|
| Type | Bridge |
| Current Cardano status | Operational. It rejected 84 invalid Cardano events in a July 2026 attack (Desk Research Summary Section 4.10). Latest announcement found was November 2025. |
| Integration blocker | None reported |
| Commercial incentive | Not evidenced |
| Technical effort | Not assessed (already integrated) |
| Demand evidence | None from respondents |
| Mutual benefit | Access to Ergo and, through it, Bitcoin assets; no observed flows (Interoperability Value-Flow Assessment: neutral-access) |
| Risk | Bridge consensus sits on Ergo (Desk Research Summary Section 4.11). |
| Recommended action | Monitor |
| Confidence | Low |

### 4. Cardinal

| Dimension | Detail |
|---|---|
| Type | Bridge |
| Current Cardano status | Operational since December 2025 (Desk Research Summary Section 4.10). No 2026 update found. |
| Integration blocker | None reported |
| Commercial incentive | Not evidenced |
| Technical effort | Not assessed (already integrated) |
| Demand evidence | None from respondents |
| Mutual benefit | Bitcoin liquidity for Cardano DeFi, in design; no observed flows (Interoperability Value-Flow Assessment: neutral-access) |
| Risk | Relies on the bridge's operator model. |
| Recommended action | Monitor |
| Confidence | Low |

### 5. Bifrost

| Dimension | Detail |
|---|---|
| Type | Bridge |
| Current Cardano status | Pre-mainnet. Public milestone records conflict. A treasury funding request was submitted in June 2026 and its outcome was not found. |
| Integration blocker | Delivery: three milestone dates have passed (Desk Research Summary Section 4.7). |
| Commercial incentive | Catalyst and treasury funding; in design, rewards to Cardano stake pool operators who secure it (Desk Research Summary Section 3.12) |
| Technical effort | Not assessed |
| Demand evidence | None from respondents |
| Mutual benefit | In design only (Interoperability Value-Flow Assessment: neutral-access, pending delivery) |
| Risk | Continued delay |
| Recommended action | Monitor until delivered. |
| Confidence | Low |

### 6. Milkomeda C1

| Dimension | Detail |
|---|---|
| Type | Partner chain (EVM sidechain) |
| Current Cardano status | Deprecated and shut down in September 2025 (Desk Research Summary Section 4.7) |
| Integration blocker | The reason for shutdown is not documented in our sources. |
| Commercial incentive | None current |
| Technical effort | Not applicable |
| Demand evidence | None from respondents |
| Mutual benefit | None current |
| Risk | Shows that an EVM route to Cardano was tried and did not last. Retained as negative-case evidence for Gate 9 (Screening Report Section 2.2). |
| Recommended action | Reject as a current partner. |
| Confidence | Low |

### 7. Apex Fusion

| Dimension | Detail |
|---|---|
| Type | Partner chain and bridge |
| Current Cardano status | Live. Its tokens are native Cardano assets and trade on Cardano applications including Minswap (E-467). About 300 stake pool operator nodes secure its network (E-476). It is integrating LayerZero on its own side (E-473). Secondary sources report it has also integrated LayerZero's Stargate to route USDC to its chains; dates not verified. |
| Integration blocker | Integration took 6 to 12 months against 1 to 2 months for an equivalent EVM chain (E-471), because Cardano lacks the plug-and-play tooling and service providers common on EVM chains (E-468). At build time, the main barrier was the lack of stablecoin liquidity (E-472). Today it is access to ecosystem decision-makers and capital (E-477, E-481). |
| Commercial incentive | A loyal, capable builder community with less competition than the EVM market (E-474); a possible future dual-staking opportunity for stake pool operators (E-484) |
| Technical effort | High (E-468, E-471). AI coding tools now handle about 80% of the coding, but security hardening still takes as long (E-469). |
| Demand evidence | Little demand originates from within Cardano itself (E-474); another provider describes its usage as low (E-090). |
| Mutual benefit | Value and traffic flow both ways across its bridge (E-485); value accrues to its token, which is a Cardano-native asset (E-484). |
| Risk | It depends fully on Cardano technology (E-485), and it is not yet commercially self-sustaining without subsidy (E-477). |
| Recommended action | Coordinate: help it reach ecosystem decision-makers (E-481). Funding is not supported by current evidence. |
| Confidence | Low (single provider; technical review by Samir Idris pending, items B1 and B2) |

### 8. Circle USDCx

| Dimension | Detail |
|---|---|
| Type | Other (stablecoin issuer) |
| Current Cardano status | Live since 27 February 2026. The fee subsidy ended on 28 May 2026 (Screening Report Section 3.2). |
| Integration blocker | For builders: the token is Cardano-only and has no documented liquidity on African exchanges (Desk Research Summary Section 8.5). |
| Commercial incentive | Delivered through the Cardano Critical Integrations programme |
| Technical effort | Not assessed |
| Demand evidence | One builder proposes integrating it (E-428); one says the liquidity increase disappointed (E-396); a provider needed stablecoin liquidity at build time (E-472). Builders raise stablecoin liquidity as an ecosystem-wide problem (E-393, E-405). |
| Mutual benefit | Not shown to bring net-new value (Interoperability Value-Flow Assessment: neutral-access) |
| Risk | Single-chain stablecoin exposure, a known failure mode in African markets (Desk Research Summary Section 8.5) |
| Recommended action | Monitor. Liquidity depth and multi-chain availability are routed to RFP 03 (stablecoin liquidity incentive and activation). |
| Confidence | Low |

### 9. Celo MiniPay

| Dimension | Detail |
|---|---|
| Type | Wallet |
| Current Cardano status | No Cardano relationship |
| Integration blocker | Not applicable: MiniPay is a competing distribution channel on an Ethereum Layer 2. |
| Commercial incentive | None for MiniPay to add Cardano |
| Technical effort | Not assessed |
| Demand evidence | Over 16 million activated wallets, most in African markets (Desk Research Summary Section 8.3) |
| Mutual benefit | None. Routing Cardano value through it carries value off Cardano (Interoperability Value-Flow Assessment: value-leakage risk). |
| Risk | Value leakage |
| Recommended action | Reject as a partner. Learn from its distribution model instead (Section 5). |
| Confidence | Low |

### 10. Cardano wallets (as a group)

| Dimension | Detail |
|---|---|
| Type | Wallet |
| Current Cardano status | Live, but with no native mobile wallet connection for applications (E-038, E-071) and no phone-number addressing (Desk Research Summary Section 3.13). Builders describe the wallet landscape as fragmented and harder to use than alternatives (E-432). |
| Integration blocker | Not established: no Cardano wallet provider was interviewed. |
| Commercial incentive | Not evidenced |
| Technical effort | Not assessed (technical review by Samir Idris pending, item C1) |
| Demand evidence | Three builders need mobile wallet connection (E-038, E-071, E-432); seven need basic-phone or offline access (L2 Demand Map, entry 5). Builder-side demand is Medium confidence. |
| Mutual benefit | Access for mobile-first and basic-phone users to Cardano applications |
| Risk | Without it, applications stay desktop-only and users route through other channels. |
| Recommended action | Coordinate with wallet teams on mobile connection and phone-based access (Interoperability Requirements Register). |
| Confidence | Low (provider side) |

### 11. Multi-chain wallet-infrastructure providers (as a group)

| Dimension | Detail |
|---|---|
| Type | Wallet |
| Current Cardano status | None of the wallet-infrastructure partners used by one African exchange support Cardano (E-154, E-157). |
| Integration blocker | Adding Cardano would mean integrating a separate infrastructure stack, judged too complex and resource-intensive (E-157). |
| Commercial incentive | Low: the exchange selects chains on trading volume, and Cardano's is too low (E-156). |
| Technical effort | High for the operator (E-157) |
| Demand evidence | The operator says it is "just not time yet" for Cardano; partner support together with demonstrated trading volume would change this (E-158, E-161). Positive sentiment alone is not enough (E-159). |
| Mutual benefit | Access for exchange users, if demand existed |
| Risk | Single operator's account |
| Recommended action | Defer until trading demand exists. Infrastructure support alone would not change the decision (E-159). |
| Confidence | Low |

### 12. Pyth

| Dimension | Detail |
|---|---|
| Type | Infra (oracle) |
| Current Cardano status | Live. Cardano projects can claim one year of free Pyth Pro access, announced in June 2026, so funded access runs until around June 2027. Pyth's paid plans start at 500 US dollars a month (Desk Research Summary Section 6.5). |
| Integration blocker | For builders: cost after the free year. One builder did not integrate because he could not afford it afterwards (E-335). |
| Commercial incentive | Funded through the Cardano Critical Integrations programme |
| Technical effort | Not assessed |
| Demand evidence | One builder would continue at the commercial rate if the service is worth it and revenue supports it (E-494); one would not (E-335). |
| Mutual benefit | Institutional-grade price data for Cardano applications |
| Risk | The free funded feed displaced native providers: both interviewed native oracle providers lost business to it (E-091, E-100). One builder would have preferred funding to go to native providers (E-336). |
| Recommended action | Monitor, and reassess before the free access period ends. |
| Confidence | Low |

### 13. Orcfax

| Dimension | Detail |
|---|---|
| Type | Infra (oracle) |
| Current Cardano status | Not live at interview (14 August 2026), after a hard fork broke continued support and paying customers fell away (E-096) |
| Integration blocker | Commercial: lost its last paying client to Pyth (E-100); builders prefer free centralised data (E-111). Coordination: a core component it relied on was discontinued (E-109). |
| Commercial incentive | None current; publication was subsidised for six months, then self-funded or unpaid (E-114). |
| Technical effort | Low (built on Cardano) |
| Demand evidence | Users were mainly individuals doing coin swaps; organisations were interested but unwilling to pay (E-098). |
| Mutual benefit | Cardano-native oracle data; the open-source data format survives the network (Desk Research Summary Section 6.3). |
| Risk | Loss of native oracle diversity (Desk Research Summary Section 6.1) |
| Recommended action | Monitor (Interoperability Value-Flow Assessment) |
| Confidence | Low |

### 14. Charli3

| Dimension | Detail |
|---|---|
| Type | Infra (oracle) |
| Current Cardano status | Not active on Cardano. At interview on 12 August 2026, Charli3 confirmed it ceased Cardano-focused operations in May 2026 for lack of commercial growth and profitability (E-075), and has moved its oracle work to Radix (E-094). |
| Integration blocker | Commercial: it could not charge while competing with a subsidised free feed (E-091). Ecosystem: no clear technical or commercial support channels for onboarding enterprises (E-079). Coordination: it had to build its own bridging tools when core tooling stopped (E-087). |
| Commercial incentive | None current on Cardano. On Radix it received more support and business in 60 days than in three years on Cardano (E-094). |
| Technical effort | Low (built on Cardano) |
| Demand evidence | Builders prefer free or centralised data sources (E-111, E-335). |
| Mutual benefit | None current |
| Risk | Further native provider exits if subsidies end without real growth in volume (E-091) |
| Recommended action | Monitor |
| Confidence | Low |

### 15. Blockfrost

| Dimension | Detail |
|---|---|
| Type | Infra (API) |
| Current Cardano status | Operational. Builders use its free tier (E-048, E-069). |
| Integration blocker | For the provider: infrastructure is expensive to maintain (E-019). |
| Commercial incentive | Builders would pay if the service were critical, with zero downtime and low latency (E-069), or if it clearly improved development (E-054). Most have not paid yet (E-018, E-037). |
| Technical effort | Not applicable (integrated) |
| Demand evidence | Rated the easiest part of building (E-048); builders depend on it (E-019, E-025). One provider left it over performance issues (E-087). |
| Mutual benefit | Lower entry cost for African builders, who would otherwise run their own nodes at greater expense (E-025) |
| Risk | Builders depend on a free tier from a single provider. |
| Recommended action | Monitor |
| Confidence | Low |

### 16. Midnight

| Dimension | Detail |
|---|---|
| Type | Partner chain |
| Current Cardano status | Live, with its own ledger, consensus and tokens (Desk Research Summary Section 3.8) |
| Integration blocker | Not established for providers |
| Commercial incentive | Not evidenced |
| Technical effort | Not assessed |
| Demand evidence | Two builders want its privacy features (E-404, E-484); one builder chose it over Cardano for default privacy (E-298). |
| Mutual benefit | Privacy capability for Cardano applications; no retention mechanism built in (Interoperability Value-Flow Assessment: neutral-access) |
| Risk | Applications can build on Midnight without Cardano (E-297). |
| Recommended action | Monitor |
| Confidence | Low |

### 17. Partner Chains Toolkit

| Dimension | Detail |
|---|---|
| Type | Partner chain (framework) |
| Current Cardano status | Available; used by Midnight and Materios (Desk Research Summary Section 3.3) |
| Integration blocker | Not established |
| Commercial incentive | Optional security from Cardano stake pool operators (Desk Research Summary Section 3.9) |
| Technical effort | Not assessed |
| Demand evidence | None from respondents |
| Mutual benefit | Partner access; partner chains can leave without lock-in (Interoperability Value-Flow Assessment: neutral-access) |
| Risk | Low for Cardano |
| Recommended action | Monitor |
| Confidence | Low |

### 18. Masumi

| Dimension | Detail |
|---|---|
| Type | Infra (agent payments) |
| Current Cardano status | Payment contracts on mainnet; the planned Layer 2 is not delivered (Desk Research Summary Section 6.7). |
| Integration blocker | Not established |
| Commercial incentive | Enterprise engagement documented (Desk Research Summary Section 6.7) |
| Technical effort | Not assessed |
| Demand evidence | Self-reported: over 19,000 transactions and over 250 businesses and users onboarded (not verified) |
| Mutual benefit | Cardano-native settlement for agent payments (Interoperability Value-Flow Assessment: neutral-access) |
| Risk | Adoption figures are the project's own. |
| Recommended action | Monitor |
| Confidence | Low |

### 19. Fetch.ai and ASI Cloud

| Dimension | Detail |
|---|---|
| Type | Infra (intelligence) |
| Current Cardano status | Not Cardano infrastructure (Desk Research Summary Section 6.6) |
| Integration blocker | No Cardano-native option for inference compute (Desk Research Summary Section 6.8) |
| Commercial incentive | Not evidenced |
| Technical effort | Not assessed |
| Demand evidence | Our own validation work only (VAL-005) |
| Mutual benefit | Not established (Interoperability Value-Flow Assessment: neutral-access) |
| Risk | Low to Medium |
| Recommended action | Defer. The inference compute gap is routed to RFP 09. |
| Confidence | Low |

### 20. Hyperledger Identus

| Dimension | Detail |
|---|---|
| Type | Infra (identity) |
| Current Cardano status | Available as open source, maintained by Input Output Engineering and the community; no African deployment found (Desk Research Summary Sections 4.4, 4.5) |
| Integration blocker | Undocumented configuration issues, and a quick-start guide that does not cover Cardano deployment (Desk Research Summary Sections 5.4, 5.5; VAL-003, our own validation work) |
| Commercial incentive | Not evidenced |
| Technical effort | Not assessed beyond our own validation work |
| Demand evidence | Seven builders and providers need identity verification, but none uses Identus (Interoperability Requirements Register, requirement 2). |
| Mutual benefit | Identity anchored on Cardano (Interoperability Value-Flow Assessment: neutral-access) |
| Risk | African identity work is happening on other chains (Desk Research Summary Section 4.4). |
| Recommended action | Monitor |
| Confidence | Low |

### 21. Non-Cardano multi-chain tooling provider (R-008, Category 4, anonymised)

| Dimension | Detail |
|---|---|
| Type | Other |
| Current Cardano status | Not on Cardano; live on other chains and considering Cardano |
| Integration blocker | Nothing rules Cardano out; it is a matter of priority for a small team (E-143). Its developer had not yet assessed Cardano's architecture (E-150). |
| Commercial incentive | Cardano's Africa-focused community and research effort (E-142) |
| Technical effort | Not yet assessed by the provider (E-150) |
| Demand evidence | Its conditions are a growing community of users, developers adopting its tooling, and access to grants (E-144, E-151). |
| Mutual benefit | New tooling on Cardano, if its conditions are met |
| Risk | It reports user acquisition as its main difficulty (E-145); one condition is grant access. |
| Recommended action | Monitor |
| Confidence | Low |

**4. Why Providers Have Not Prioritised Cardano (Gate 9)**

Each explanation in our proposal was tested against the evidence. "Supported" means at least one provider or operator gave it as a reason.

| Explanation | Finding | Evidence |
|---|---|---|
| Demand | Supported. Providers and operators wait for users and volume before adding Cardano. | E-156, E-158, E-161 (exchange); E-144, E-151 (tooling provider); E-474 (partner chain); E-098 (oracle) |
| Integration cost | Supported. The one provider able to measure it took 6 to 12 months to integrate with Cardano, against 1 to 2 months for an EVM chain. | E-471; Desk Research Summary Section 9.6 |
| Technical complexity | Supported, as missing tooling rather than missing capability. | E-468, E-470, E-479; E-157 (separate stack needed) |
| Liquidity | Supported | E-472, E-478 (partner chain); E-393, E-405 (builder) |
| Security risk | Supported by desk evidence, not raised by interviewed providers. | Desk Research Summary Section 4.8 (Wanchain exploit) |
| Incentive misalignment | Supported. Funded free services undercut native providers who charge. | E-091, E-100, E-117, E-336; Desk Research Summary Section 9.1 |
| Commercial opportunity cost | Supported. Another chain offered more business in 60 days than Cardano did in three years. | E-094 |
| Lack of ecosystem support | Supported. Providers report no clear support channels, hard access to decision-makers, and a governance process experienced as political. | E-079, E-081, E-095, E-107, E-117, E-481; E-454 (non-Cardano builder) |

**What this means:** no provider or operator said Cardano lacks the technical capability they need. The reasons are commercial and organisational: too little demand, harder integration, free funded competitors, and weak support channels. This matches the Desk Research Summary finding that integration cost is a structural asymmetry rather than a capability gap (Section 9.6).

**5. Peer Ecosystem Benchmarking**

Drawn from Desk Research Summary Section 8, applied only where it bears on a provider recommendation.

| Lesson | Evidence | Bearing on providers |
|---|---|---|
| Learn: distribution comes before infrastructure | MiniPay reached over 16 million wallets by embedding in a browser already on African phones (Section 8.3). | Wallet and access-channel work matters more than new bridges (entries 9 and 10). |
| Adapt: condition support on usage, and recruit proven teams | Celo gates its main grants on on-chain transactions and runs an invite-only pool to bring proven teams from other ecosystems (Section 8.4). Interview evidence matches: one provider reports that another chain actively sought out its infrastructure (E-094). | Support for providers should follow evidence of usage, and Cardano could approach proven providers directly rather than only through open calls. |
| Avoid: single-chain stablecoin exposure | Regulated African stablecoins deploy across many chains; the stablecoin issued on Cardano is Cardano-only (Section 8.5). | Entry 8 |
| Test: whether a funded free service builds a lasting market | Every observed Cardano infrastructure adoption in 2026 was subsidised (Section 9.1). Interviews show a funded free oracle displacing native providers (E-091, E-100). | Entries 12 to 14; reassess before free oracle access ends around June 2027 |

**6. Answers to the Decision Gates (preliminary)**

| Gate | Preliminary answer | Confidence |
|---|---|---|
| 8. Which bridge, partner-chain or cross-chain partners should Cardano prioritise? | None for new funding on current evidence. Coordinate with Apex Fusion on access to ecosystem decision-makers and with Cardano wallet teams on mobile and phone-based access. Monitor LayerZero, Bifrost, Rosen, Cardinal and Pyth for observed flows. Defer Wanchain. | Low |
| 9. What is preventing bridge and interoperability providers from prioritising Cardano? | Low demand and volume, higher integration cost from missing tooling, funded free services undercutting native providers, and weak ecosystem support channels. Not missing technical capability. | Low |

**7. Change Register**

| Item | Earlier position | Where | Now | Reason |
|---|---|---|---|---|
| Charli3 status | No indication of funding distress was identified | Desk Research Summary Section 6.4 | Ceased Cardano-focused operations in May 2026 | Charli3's own account at interview on 12 August 2026 (E-075, E-094). The desk position noted that its funding was not independently verified. |

**8. Limitations**

- One bridge, interoperability or wallet provider was interviewed against a committed five to eight. Every entry is held at Low confidence.
- No Cardano wallet provider was interviewed, so wallet entries rest on builder demand and desk evidence.
- The technical review by Samir Idris is pending for items B1 and B2 (Apex Fusion) and C1 (mobile wallet connection).
- XDAO, Chainlink and Circle CCTP were not assessed (Section 2).
- Several status checks rely on secondary sources that could not be verified directly.

**9. AI Use Disclaimer**

AI tools were used in the analysis and drafting behind this document, as logged in our AI Tool Disclosure Log (grant clause 4.2). We have reviewed this work and remain responsible for its accuracy. Feedback is welcome, and we will update the document, or defend it where necessary.

**Status sources (checked 10 October 2026)**

- LayerZero: [Cardano Foundation Monthly Update, June 2026](https://cardanofoundation.org/blog/june-2026-activities)
- Wanchain: [crypto.news](https://crypto.news/wanchain-cardano-bridge-exploit-drains-515m-night-worth-9m/); [CoinMarketCap Wanchain updates](https://coinmarketcap.com/cmc-ai/wanchain/latest-updates/)
- Bifrost: [Project Catalyst](https://projectcatalyst.io/funds/14/cardano-use-cases-partners-and-products/bifrost-bitcoin-cardano-bridge-secured-by-cardano-spos); [Cardano governance record](https://app.cgov.io/governance/dfd81f8db652fd9263e0ce3bef043b4823045ec3a5da10c817681ada7a23f034:0)
- Rosen Bridge: [Ergo Platform](https://ergoplatform.org/es/blog/Rosen-Bridge-Nears-Bitcoin-Runes-Launch/)
- Apex Fusion: [Bitcoin.com News (secondary)](https://news.bitcoin.com/de/apex-fusion-integriert-stargate-um-usdc-liquiditaet-nach-cardano-zu-bringen/)
- Pyth: [Intersect](https://intersectmbo.org/news/pyth-pro-on-cardano-subscription-offer); [cardano.org](https://cardano.org/news/2026-06-17-build-with-pyth/)
- Masumi: [NMKR](https://www.nmkr.io/clients/nmkr-x-masumi)

**Document Version History**

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 10 October 2026 | Abdulbasit Adigun Abdulrahman | Draft for Milestone 3 |
