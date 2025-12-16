---
title: Cardano 2030 Strategy (Draft)
sidebar_label: Cardano 2030 Strategy (Draft)
sidebar_position: 2
slug: /vision/strategy-2030
---

# Cardano 2030 Strategic Framework: The World's Operating System

To share your feedback:
- Use this form https://forms.gle/pVZtFRxoyWYJox5Z7
- Open a PR in github https://github.com/IntersectMBO/product-website/tree/master/docs/vision

## Executive Summary

Cardano’s objective for 2030 is to run a secure, interoperable base layer that sustains **324 million transactions per year** and anchors a growing set of Layer 2 solutions and real-world applications. To reach this, the ecosystem must:

1. **Scale and harden the protocol**: maintain 100% mainnet uptime, ship multi-client and post-quantum–ready infrastructure, and integrate L2 interoperability.
2. **Create robust on-chain demand**: focus on DeFi, RWA, supply chain, and payments, while making Cardano usage “invisible” for users and enterprises.
3. **Run antifragile on-chain governance**: Engaged DReps, turnout-aware voting, and treasury seasons to resist plutocratic capture and voter fatigue.
4. **Actively manage the treasury & network economics actively**: evolve from a passive pool to a yield-generating, multi-asset treasury,ensure L2s return value to L1, and SPOs are economically incentivised to secure the network over the long term.

Execution is distributed across Cardano various ecosystem entities (Cardano Foundation, IOG, Emurgo, Intersect, SPOs, and funded community teams); this plan defines shared outcomes rather than a single owner.

This strategy framework is divided in core pillars that represent the key areas to work on to achieve our vision.

## Core Key Performance Indicators (KPIs)

KPIs allow us to measure our progress as an ecosystem. They help shape strategy and inform where investments will generate impact, supporting funding decision making.
Three key KPIs measure Cardano's usage, adoption, and sustainability:
1. Total Value Locked (TVL)
2. Monthly transactions
3. Monthly active users (MAU)

Progress in these KPIs signals that the chain is achieving product market fit, with sustainable and growing demand for Cardano's services. This confirms we are solving critical real-world problems and delivering value for our community.
These three KPIs are supported by many additional metrics and sub-indicators that contribute to their measurement. They are also the most commonly used benchmarks across the broader crypto ecosystem, enabling comparison against peers and helping attract additional users and capital.

| Area| Metric | current status | How to calculate | 2030 Target | Rationale|
| :---- | :---- | :---- | :---- | :---- | :---- |
| Adoption | Total Value Locked (TVL)   | $200M | Liquid staking normalization.<br /><br />TVL = Σ locked assets.  | $3B| Capital confidence indicator. |
| Adoption | Monthly transactions | 800k submitted transactions per month || ≥ 27M submitted transactions per month | Signals broad, recurring on-chain activity.                                                                                                                                                              |
| Adoption | Monthly Active Users (MAU) | Approximately 100k-300k active wallets per month | Count unique addresses with transactions over 30-day window. | 1M | Measures active ecosystem participation + engagement.<br /><br /> MAU measures number of unique wallets submitting ≥1 transaction per month; does not differentiate human activity vs wallet count. |

We are limited in the number of ‘top level’ KPIs as an ecosystem we can prioritise. Too many and it is difficult to create a clear strategic direction, too few and we risk missing critical indicators across priority areas. As a result we propose the following additional Primary core KPIs. 


| Area| Metric | Current Status| How to Calculate | 2030 Target | Rationale|
| :---- | :---- | :---- | :---- | :---- | :---- |
| Reliability | Monthly (6 epochs) UpTime | 99.98 | Uptime percentage = ((Total time period − Total 5-minute blockless periods) / Total time period) × 100% | 99.98% Uptime (no blockless intervals of 5 minutes or longer across 6 epochs)<br /><br /> Reasoning: Cardano block production is modeled as a Poisson process with λ ≈ 1 block / 20 seconds.<br /><br />The probability of producing zero blocks in 5 minutes is effectively zero (≈3×10⁻⁷), therefore any 5-minute gap constitutes a statistically reliable indicator of downtime.<br /><br /> | Maintain best-in-class operational reliability. (Protocol Stability)|
| Operational resilience | Voting Power distribution of controlling stake | 35 | (total live stake - abstain DRep - NoConfidence DRep)*0.51 > than stake of top 22 DReps | 50% + 1 lovelace effective voting power controlled by > than 22 DReps | Mitigates risk of attacks from colluded DReps |
| Operational resilience | Alternative full node clients | 1 | | ≥ 2 live, spec-conformant | Reduce single-client risk. |
| Revenue / adoption | Annual Protocol Revenue | 3.5M ada within the calendar | Annual Protocol Revenue = Submitted Transactions per year * avg fee per submitted transaction| ≥ 16M ada (assuming an ada value of $5 and a reduction of avg fees over the 4 years from 0.3 ada to 0.05 ada)| This includes all revenue to the protocol (excluding the rewards).<br /><br />The key metric of economic self-sufficiency and utility.<br /><br /> (Revenue could come from fees, L1 and L2 services, investments and more) |
| Governance| DRep participation rate||% of active DReps (by stake) voting on 90% or more of governance actions| > 70% of active DReps (by stake) vote on 90% or more of governance actions.| Measure the vitality and engagement of the decision-making layer. |
| Scalability | Throughput capacity per day| 300k transactions per day || 3x current capacity | Tracking scalability of the system to meet adoption KPIs |

### KPI and Metric Strategy
- The list above is not a complete list of  KPIs. We expect this framework to evolve and mature over time. We recognize that a broader, more complete measurement framework is necessary, including more detailed secondary and tertiary level KPIs. 
- This initial focus provides the community with immediate KPI’s to support with alignment of treasury  funding decisions while the comprehensive framework is developed. We expect to develop this fuller and more comprehensive set of KPIs for the evolution of the Cardano blockchain in early 2026 and will work closely with the community and the other committees to shape the KPI direction. This will also include developing Marketing KPIs to broaden reach and engagement, drive positive perceptions and bring more users to the chain..
- As part of the review of KPIs with the community we will also aim to support a strategy on how metrics are more effectively tracked and reported on, including supporting the creation of relevant dashboards.

**A note on terminology**  

***Metrics*** are quantifiable measures that track specific aspects of ecosystem activity. They provide raw data points that can be monitored over time. Examples include transaction count, wallet addresses, smart contract deployments, and fee volumes. Metrics answer the question: "What is happening?"

***Key Performance Indicators*** are a curated subset of metrics that directly measure progress toward strategic objectives. They are actionable signals that drive strategy and decision-making at the highest level. KPIs answer the question: "Are we succeeding in our strategic goals?" and ensure strategic alignment. Typically, KPIs are limited in number to maintain focus, though teams, groups may have their own more detailed KPIs. 


## Pillar 1: Infrastructure & Research Excellence

Keep Cardano secure, fast, and interoperable so it can host more economic activity.

### I.1. Scalability & Interoperability

| Focus Area | Description | Expected Enhancement |
| :---- | :---- | :---- |
| **L1 protocol improvements** | Improve consensus, ledger, and networking to raise throughput and shorten finality. | L1 capacity for institutional, retail, and enterprise demand. |
| **L2 integration** | Make L2 solutions first-class so high-volume activity can move off L1 and settle back. | High-frequency, low-latency transactions with L1 security. |
| **Cross-chain interoperability** | Standardize secure bridges and state-proofs to other chains and legacy infra. | Cardano as an interoperability hub. |
| **Core ZK capabilities** | Provide modular ZK infrastructure for private, verifiable off-chain computation. | Privacy-preserving, verifiable apps. |

### I.2. Security & Resilience

| Focus Area | Description | Expected Enhancement |
| :---- | :---- | :---- |
| **Post-quantum readiness** | Migrate protocol-critical cryptography to PQ-resistant candidates. | Proactive protection against future threats. |
| **Client diversity** | Support additional full-node and light-client implementations with conformance testing. | Better decentralization. |
| **Threat detection & recovery** | Improve observability, self-healing, and disaster-recovery procedures. | Enterprise-grade reliability for regulated use. |

## Pillar 2: Adoption & Utility

Driving widespread, non-speculative utility by focusing on high-value industry verticals, superior user experience (UX), and enterprise-grade security.

### A.1. High-Value Verticals

| Vertical | Strategy |
| :---- | :---- |
| **DeFi** | Secure, institutional-grade liquidity onramps (incl. BTC) and more usable Cardano-native DeFi. |
| **RWA** | Tokenize illiquid assets (real estate, supply chain assets) with deterministic fees. |
| **Supply chain / provenance** | Use metadata and native assets for traceability and recalls. |
| **Payments** | Fast, low-cost cross-border payments via L2/native assets. |

### A.2. Experience (Business & Consumer)

| Focus Area | Strategy | Expected Enhancement |
| :---- | :---- | :---- |
| **Invisible technology** | Hide wallets, fees, and signing flows where possible. | Lower adoption friction. |
| **Decentralized identity (SSI)** | Embed decentralized identity solutions (DID) and self sovereign identity (SSI) into transactions, contracts, and governance for selective privacy and compliance. | Enterprise-ready trust layer. |
| **Enterprise security & compliance** | Offer formal-methods-backed and ISO/SOC, and other industry standard-compatible patterns. | Easier enterprise and gov procurement. |

### A.3. Developer Experience

| Focus Area | Description | Expected Enhancement |
| :---- | :---- | :---- |
| **Open-source incentives** | Incentivize the maintenance of core Cardano SDKs, frameworks, and infrastructure in line with open-source best practices. | Sustainable builder ecosystem. |
| **Education & migration** | Provide materials for EVM/account-based devs moving to Cardano/UTxO. | More developers can onboard. |
| **Compatibility** | Align with common multi-chain tooling where feasible. | Lower switching costs vs. other L1s. |

## Pillar 3: Governance

Cardano governance must be hard to capture, easy to use, and paced. This builds directly on Cardano’s tripartite model of DReps, Constitutional Committee, and SPOs.

### G.1. Incentivized & Accessible Governance

| Focus Area | Strategy | Expected Enhancement |
| :---- | :---- | :---- |
| **Role-based incentives for DReps, SPOs & CC** | Fund DReps, SPOs and the Constitutional Committee based on observable activity (votes, rationales, attendance) rather than single binary metrics. | Broader, more diverse participation; less reliance on large-stake actors. |
| **Governance accessibility tools** | Maintain and develop tools to register as DRep, delegate, vote, submit/view governance actions, and message delegators. | Frictionless participation → higher legitimate turnout. |

### G.2. Turnout-Aware Voting with Delegator Safeguard

| Focus Area | Strategy | Expected Enhancement |
| :---- | :---- | :---- |
| **Adaptive / turnout-aware thresholds** | Apply turnout-aware approval (like adaptive quorum biasing) so low-turnout proposals need higher yes-ratios. | Prevents “quiet” passes and aligns decisions with actual participation. |
| **Delegator override of DRep votes** | Allow ADA holders to override their DRep for layer 2 decisions on a per-proposal basis without redelegating. | Protects against captured/inactive DReps while keeping delegation convenient. |

### G.3. Treasury Seasons

| Focus Area | Strategy | Expected Enhancement |
| :---- | :---- | :---- |
| **Seasonal proposal windows** | Batch treasury/budget actions into a governance-approved annual calendar; publish season reports (spend, participation, vetoes). | Less proposal spam, less voter fatigue, clearer deliberation cycles.   |

## Pillar 4: Community & Ecosystem Growth

Driving global engagement through a market-centric approach, cultivating a skilled developer base, and proactively demonstrating ecosystem value.

### C.1. Talent Acquisition & Retention

| Focus Area | Strategy | Expected Enhancement |
| :---- | :---- | :---- |
| **Youth Engagement** | Implement pilot programs for blockchain education in schools and university curricula, focusing on computer science and gamified learning. | Long-term talent pipeline. |
| **Hands-on Experience** | Support initiatives that provide students and developers with practical experience in Cardano tooling and real-world problem-solving. | A community with demonstrable skills. |
| **Structured funding routes** | Connect incoming talent to Catalyst/treasury seasons. | Better retention of skilled contributors. |

### C.2. Global Engagement & Market Adoption

| Focus Area | Strategy | Expected Enhancement |
| :---- | :---- | :---- |
| **Proactively Demonstrate Ecosystem Value** | Cultivate a public narrative that demonstrates Cardano's architectural strengths and high-assurance design, building confidence with partners and users. | Better external perception. |
| **Localized adoption** | Target specific, high-impact markets (e.g., LATAM, Africa, East Asia) with localized partnerships and communication strategies. | Regional growth where blockchain solves real frictions. |

## Pillar 5: Ecosystem Sustainability & Resilience

Ensuring the long-term financial health and operational integrity of the network infrastructure.

### E.1. Financial Stewardship & Tokenomics

| Focus Area | Strategy | Expected Enhancement |
| :---- | :---- | :---- |
| **Multi-Asset Treasury** | Allow treasury and proposals to include assets other than ADA. | Provides a way for products built on Cardano to contribute to the layer 1 without spending ADA. |
| **Managed treasury** | Evolve the treasury beyond a passive, single-asset pool into an actively managed, multi-asset portfolio to generate yields and strategically deploy capital into growth-focused investments. | 10%+ ROI on non-ADA assets. |
| **L2 → L1 value retention** | Refine the ecosystem's tokenomics to ensure stability, competitive service pricing, and sustainable decentralization, ensuring Layer 2 solutions contribute value back to the L1 protocol. | Prevent value leakage from scaling solutions. |

### E.2. SPO Incentives

| Focus Area | Strategy | Expected Enhancement |
| :---- | :---- | :---- |
| **Diversified SPO roles** | Advance programs to incentivize SPOs to diversify beyond L1 block production into supporting Layer 2 protocols, Actively Validated Services (AVS) for partner chains, and decentralized hosting. | Broader, more resilient infra. |
| **Decentralization target** | Keep k-parameter / pool distribution such that \>500 independent pools produce ≥95% of blocks. | Strong base-layer security. |
