---
title: "Technical Review of Milestone 3 Claims - NexTrium Milestone 3 (CPC-26-0015)"
sidebar_label: "Technical Review of Milestone 3 Claims"
---

**NEXTRIUM**

Global Innovations Ltd

**Technical Review of Milestone 3 Claims**

*Independent assessment of technical claims behind the Milestone 3 drafts*

| **Project Number**        | CPC-26-0015                                                                     |
|---------------------------|---------------------------------------------------------------------------------|
| **Document Reference**    | Supporting output to the Milestone 3 drafts                                     |
| **Version**               | 1.0                                                                             |
| **Date**                  | 11 October 2026                                                                 |
| **Prepared by**           | Abdulbasit Adigun Abdulrahman, Founder and CEO, NexTrium Global Innovations Ltd |
| **Submitted to**          | Cardano Product Committee / Intersect                                           |

**Reviewer Statement**

This review was conducted by Samir Idris, Technical Advisor, and completed on 10 October 2026. The reviewer assessed only the technical accuracy of the claims listed below. He did not design the research, write the deliverables or make recommendations to the Committee. He declared Product Committee membership and prior work with Cardano DeFi projects, and declared a conflict on item A3 (prior Cardano DEX experience); that verdict is labelled and did not change any rating.

**Scope**

Thirteen claims were reviewed: eight infrastructure claims from Cardano builders and providers (A1 to A8), two provider claims (B1, B2), one wallet claim (C1), and two findings from our own validation work (D1, D2), where the question was whether the finding reflects a general ecosystem constraint or our own architecture.

**Summary of verdicts**

| Verdict | Items |
|---|---|
| Confirmed | A4, A5, A6, A7 |
| Partially confirmed | A1, A2, A3, B2, C1, D1, D2 |
| Cannot assess | A8, B1 |

**Verdicts**

| Item | Area | Claim reviewed | Verdict | Better explained by | Resolved by | Expected timing | Reviewer comments | Conflict |
|---|---|---|---|---|---|---|---|---|
| A1 | Oracle publication speed and cost | Block time before Leios is a significant barrier for enterprise-grade applications; transaction costs remain a significant barrier for enterprise-scale adoption absent Layer 2 solutions; latency largely managed, cost has not been. (E-080, E-089 (T-016, T-018)) | Partially confirmed | Protocol parameter; impact is workload-dependent | No direct fix identified; Hydra may mitigate latency/cost for suitable workloads. Leios primarily improves throughput. | Hydra available now | The underlying latency and cost concerns are valid for some high-volume workloads, but the claim overgeneralises enterprise use cases and Leios does not directly reduce the L1 block-time granularity. | No |
| A2 | Oracle publication speed and cost | Cannot provide lower-latency or derivative price feeds because of Cardano transaction speed and cost; publishing high-volume data is costly with no efficient way to monetise its consumption; a Layer 2 that collects, verifies and reaches consensus on data off Layer 1 before publishing would fix this; no generic Layer 2 exists for that peer-to-peer consensus need. (E-099, E-104, E-105, E-113 (T-021, T-023, T-024, T-028)) | Partially confirmed | L1 latency/fees plus oracle architecture and business-model constraints | No direct generic solution identified. Hydra may be a partial architectural fit, but is not a drop-in oracle consensus solution. | Hydra available now; suitability for this use case not established | High-frequency oracle publishing can be constrained by L1 fees and latency. However, monetising data consumption is also a business/application-design issue. Hydra provides low-cost peer-to-peer execution among a known static participant set, but its suitability as a generic oracle-consensus layer is not established. | No |
| A3 | Deterministic transactions and order books | Cardano's deterministic transaction model conflicts with order-book matching, limiting matching to once per transaction and forcing centralised off-chain batchers; a single-contract true-orderbook DEX prototype was limited by Cardano's speed and is waiting on Leios. (E-126, E-426 (T-030, T-074)) | Partially confirmed | L1 throughput/concurrency constraints plus application architecture | Leios may improve throughput, but does not remove order-book matching and application-level architecture constraints. | Roadmap-dependent on Leios | Cardano eUTXO and current L1 throughput create genuine concurrency and performance constraints for high-frequency order-book DEXs. However, they do not universally limit matching to one match per transaction or force a centralised batcher. Parallel UTxO designs and off-chain routers exist. Leios may improve throughput but does not remove application-level matching constraints. | Yes, relevant prior Cardano DEX experience |
| A4 | Execution-unit limits | Strict on-chain execution-unit limits made iterating over lists of a few thousand entries effectively impossible inside a smart contract. (E-133 (T-034)) | Confirmed | Per-transaction execution-unit limits | No direct fix identified. Usually addressed by splitting work across transactions, batching, or moving some computation off-chain. | No specific roadmap dependency identified | Cardano has hard per-transaction execution-unit limits for CPU and memory. Iterating over lists with a few thousand entries inside one smart-contract transaction can exceed those limits. The exact threshold depends on the work done per entry. | No |
| A5 | Native-token micropayments | The minUTxO rule (minimum ada with any native-token output) makes micropayments and per-recipient airdrops costly, forcing multi-signature workarounds and batched claims; expects nested transactions to ease this. (E-320, E-321, E-326 (T-060, T-086)) | Confirmed | Minimum-ADA requirement per UTxO | Nested Transactions (CIP-0118) | Proposed, not yet active on mainnet | Every native-token output must include a minimum amount of ADA, making per-recipient micropayments and airdrops more capital-intensive. CIP-0118 Nested Transactions explicitly allows transactions within a batch to satisfy each other's minUTxO requirements and supports min-UTxO sponsorship. | No |
| A6 | Permissionless fast transactions | Hydra is not developer-friendly and requires participants to be known in advance; needs a permissionless state channel or rollup in which strangers can transact. Contrast: another respondent says Hydra can already solve most needs if used creatively. (E-064, E-074 (T-013); contrast E-329) | Confirmed | Hydra Head architecture and operational complexity | Midgard | Midgard is currently pre-alpha testnet | Hydra Heads use a static participant set chosen upfront, so unknown users cannot permissionlessly join an existing Head. Hydra documentation also states that operating a node requires deep understanding of the underlying infrastructure. Midgard is being developed as a permissionless optimistic rollup. The contrasting claim that Hydra can solve most needs does not address the static-participant limitation. | No |
| A7 | Continuous IoT state updates | IoT needs continuous rapid state changes; Cardano ledger transitions are slower and costlier, so recording every sensor reading on-chain is infeasible; a hybrid off-chain microcontroller design is being considered. (E-348 (T-067)) | Confirmed | L1 transaction latency and fees | Hybrid off-chain design; Hydra may help for suitable closed-participant workloads | No specific roadmap dependency identified | Recording every high-frequency IoT sensor reading directly on Cardano L1 would be impractical because each update incurs ledger latency and transaction cost. A hybrid design that keeps rapid sensor updates off-chain and anchors selected results on-chain is technically appropriate. | No |
| A8 | Bulk refunds to many recipients | On a hackathon project, bulk refunds to many contributors in one operation were 'an impossible feat on the infrastructure at the time'. (E-051 (T-012)) | Cannot assess | Other (explain in M) | Already solvable today |  | Cardano supports multiple recipients in one transaction, but maxTxSize limits how many outputs can fit, so larger refund sets must be split into batches. The number of recipients, date and tooling used in this hackathon are not provided, so the historical claim that it was "impossible" cannot be independently verified. | No |
| B1 | Integration effort versus EVM | Cardano integration took 6 to 12 months against 1 to 2 months for an equivalent EVM integration; AI coding tools now handle about 80% of integration coding, but security hardening still takes as long. (E-469, E-471 (T-099, T-100)) | Cannot assess | Tooling and ecosystem maturity | Better Cardano SDKs, libraries, documentation and integration tooling | No specific roadmap dependency identified | The specific 6 to 12 month versus 1 to 2 month integration times and the 80% AI coding figure are respondent-specific and cannot be independently verified from public sources. The broader tooling-gap claim is plausible, and security review and hardening remain necessary when using AI-generated code. | No |
| B2 | Bridging robustness | Cross-chain bridging robustness on Cardano is weak; the pending Cardano and LayerZero integration should resolve most of it; Chainlink and Circle's CCTP are the two most important remaining integrations. (E-473, E-480, E-482 (T-107)) | Partially confirmed | Ecosystem/provider integration gap | LayerZero for broader cross-chain interoperability; Chainlink remains a missing integration. Circle USDCx/xReserve already addresses the CCTP-related stablecoin transfer gap. | LayerZero endpoint infrastructure is live with wider rollout phased; USDCx live since February 2026; no confirmed Chainlink timeline. | The broader interoperability gap is valid and LayerZero is being deployed to address it. Chainlink is still not listed as a Cardano integration. However, the claim that Circle CCTP remains missing is outdated because USDCx is already live on Cardano through Circle xReserve using CCTP infrastructure. | No |
| C1 | Mobile wallet integration | Marketplace access is computer-only because there is no native mobile wallet integration for Cardano; a React Native equivalent for Cardano wallet connect is needed; the wallet ecosystem is fragmented and harder to use than alternatives such as Phantom. (E-038, E-071, E-432 (T-106)) | Partially confirmed | Wallet integration fragmentation and mobile UX/tooling | Already partially addressed through mobile wallets and CIP-45 mobile dApp connectivity | Available today, but ecosystem support is not uniform | Cardano does support mobile dApp interaction through wallets such as Eternl and through CIP-45 mobile wallet connectivity. However, support is fragmented across wallets and integration patterns, so native mobile dApp UX can still be less consistent than ecosystems with a more unified wallet stack. | No |
| D1 | Our own validation: identity | Identus on Cardano: configuration issues now resolved; credential issuance still requires a full Cardano node because the hosted API provider does not support DID publishing. (VAL-003 (T-108), Case-001) | Partially confirmed | Provider/setup limitation; not a Cardano base-layer requirement | NeoPRISM embedded wallet with Blockfrost | Available now | The tested VAL-003 setup required a Cardano node, wallet and db-sync. However, current NeoPRISM supports an embedded wallet that can build, sign and submit Cardano transactions through Blockfrost, so running a full Cardano node is no longer an inherent requirement for DID publication. | No |
| D2 | Our own validation: last-mile distribution | No phone-number-addressed, sub-cent stablecoin distribution rail on Cardano, so distributions route to Celo MiniPay. Note: two respondents report USSD access built at the application layer on Cardano (E-256, E-489). (VAL-006 (T-109), Case-002) | Partially confirmed | Ecosystem/application-layer gap | ChatterPay | Available now | Cardano now has a phone-number-addressed stablecoin payment rail through ChatterPay, so that part of the claim is no longer accurate. However, ChatterPay charges 0.45 ADA per send, so the claim that Cardano lacks a sub-cent distribution rail remains valid. | No |

**References cited by the reviewer**

| Item | References |
|---|---|
| A1 | [docs.cardano.org](https://docs.cardano.org/about-cardano/explore-more/time); [github.com](https://github.com/input-output-hk/ouroboros-leios/blob/main/docs/ImpactAnalysis.md); [hydra.family](https://hydra.family/head-protocol/) |
| A2 | [docs.cardano.org](https://docs.cardano.org/about-cardano/explore-more/fee-structure); [hydra.family](https://hydra.family/head-protocol/docs/faqs); [hydra.family](https://hydra.family/head-protocol/docs/known-issues) |
| A3 | [developers.cardano.org](https://developers.cardano.org/docs/get-started/technical-concepts/eutxo/); [docs.cardano.org](https://docs.cardano.org/about-cardano/explore-more/concurrency); [docs.geniusyield.co](https://docs.geniusyield.co/genius-dex/3.-methodology); [github.com](https://github.com/input-output-hk/ouroboros-leios/blob/main/docs/ImpactAnalysis.md) |
| A4 | [docs.cardano.org](https://docs.cardano.org/about-cardano/explore-more/parameter-guide); [developers.cardano.org](https://developers.cardano.org/docs/developers/smart-contracts/plutus/overview/) |
| A5 | [docs.cardano.org](https://docs.cardano.org/developer-resources/native-tokens); [cips.cardano.org](https://cips.cardano.org/cip/CIP-0118) |
| A6 | [hydra.family](https://hydra.family/head-protocol/docs/faqs); [hydra.family](https://hydra.family/head-protocol/docs/known-issues); [midgardprotocol.com](https://midgardprotocol.com/) |
| A7 | [docs.cardano.org](https://docs.cardano.org/about-cardano/explore-more/time); [docs.cardano.org](https://docs.cardano.org/about-cardano/explore-more/fee-structure) |
| A8 | [developers.cardano.org](https://developers.cardano.org/docs/developers/curriculum/start-building/transaction-building/); [cips.cardano.org](https://cips.cardano.org/cip/CIP-0002) |
| B1 | [developers.cardano.org](https://developers.cardano.org/docs/); [docs.cardano.org](https://docs.cardano.org/developer-resources/); [cheatsheetseries.owasp.org](https://cheatsheetseries.owasp.org/cheatsheets/Secure_Coding_with_AI_Cheat_Sheet.html) |
| B2 | [labs.iog.io](https://labs.iog.io/solutions/layerzero-and-usdt); [intersectmbo.org](https://intersectmbo.org/news/cardano-critical-integrations-program-status-update); [circle.com](https://www.circle.com/blog/usdcx-on-cardano-now-available-via-circle-xreserve); [docs.chain.link](https://docs.chain.link/ccip/directory/mainnet) |
| C1 | [cips.cardano.org](https://cips.cardano.org/cip/CIP-45); [developers.cardano.org](https://developers.cardano.org/tools/cardano-connect-with-wallet/); [cardano.org](https://cardano.org/get-started/) |
| D1 | [hyperledger-identus.github.io](https://hyperledger-identus.github.io/neoprism/configuration/submitter.html); [hyperledger-identus.github.io](https://hyperledger-identus.github.io/neoprism/references/cli-options.html); [github.com](https://github.com/hyperledger-identus/neoprism) |
| D2 | [chatterpay.net](https://chatterpay.net/fees/); [chatterpay.net](https://chatterpay.net/) |

**How the review was applied**

A confirmed claim counts as an additional evidence type when rating confidence. A partially confirmed claim is qualified in the text of the deliverable. Respondent-specific figures that could not be assessed are labelled as unverified.

| Item | Applied in |
|---|---|
| A1 | L2 Barrier Analysis, rank 18; L2 Demand Map, entry 1 |
| A2 | L2 Barrier Analysis, rank 18; L2 Demand Map, entry 1 |
| A3 | L2 Barrier Analysis, rank 6; L2 Demand Map, entry 2 |
| A4 | L2 Barrier Analysis, rank 15 (confidence raised) |
| A5 | L2 Barrier Analysis, rank 10 (confidence raised) |
| A6 | L2 Barrier Analysis, rank 10 (confidence raised) |
| A7 | L2 Barrier Analysis, rank 10 (confidence raised); L2 Demand Map, entry 3 |
| A8 | L2 Barrier Analysis, rank 4 (rejected; historical) |
| B1 | L2 Barrier Analysis, rank 23; Provider and Partner Opportunity Analysis, entry 7 |
| B2 | L2 Barrier Analysis, rank 19; Interoperability Requirements Register; Provider and Partner Opportunity Analysis |
| C1 | L2 Barrier Analysis, rank 8; L2 Demand Map, entry 4; Interoperability Requirements Register, requirement 1 |
| D1 | L2 Barrier Analysis, rank 24 and Section 4; Interoperability Value-Flow Assessment, pathway 13 |
| D2 | L2 Barrier Analysis, rank 9 and Section 4; Interoperability Value-Flow Assessment, pathway 2 |

**AI Use Disclaimer**

AI tools were used to format this document from the reviewer's returned review sheet, as logged in our AI Tool Disclosure Log (grant clause 4.2). The verdicts and comments are the reviewer's. We remain responsible for how they are applied.
