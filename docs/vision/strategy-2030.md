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

Cardano’s objective for 2030 is to run a secure, interoperable base layer that sustains **400 million ADA in annual L1 revenue** and anchors a growing set of Layer 2 solutions and real-world applications. To reach this, the ecosystem must:

1. **Scale and harden the protocol**: maintain 100% mainnet uptime, ship multi-client and post-quantum–ready infrastructure, and integrate L2 interoperability.
2. **Create robust on-chain demand**: focus on DeFi, RWA, supply chain, and payments, while making Cardano usage “invisible” for users and enterprises.
3. **Run antifragile on-chain governance**: use DReps, turnout-aware voting, and treasury seasons to resist plutocratic capture and voter fatigue.
4. **Manage the treasury & network economics actively**: evolve from a passive pool to a yield-generating, multi-asset treasury,ensure L2s return value to L1, and SPOs are economically incentivised to secure the network over the long term.

Execution is distributed across Cardano ecosystem entities (Cardano Foundation, IOG, Emurgo, Intersect, SPOs, and funded community teams); this plan defines shared outcomes rather than a single owner.

This strategy framework is divided in core pillars that represent the key areas to work on to achieve our vision.

## Core Key Performance Indicators (KPIs)

These KPIs are network-level and observable. They tie directly to the four levers above.

| Area | Metric | current status | How to calculate | 2030 Target | Rationale |
| ---------------------- | ---------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reliability | Monthly (6 epochs) UpTime | 99.98 | Uptime percentage = ((Total time period − Total 5-minute blockless periods) / Total time period) × 100% | 99.98% Uptime (no blockless intervals of 5 minutes or longer across 6 epochs)<br /><br />Reasoning: Cardano block production is modeled as a Poisson process with λ ≈ 1 block / 20 seconds.<br />The probability of producing zero blocks in 5 minutes is effectively zero (≈3×10⁻⁷), therefore any 5-minute gap constitutes a statistically reliable indicator of downtime.<br /><br />Reasoning: ([reference calculation](https://chatgpt.com/share/6929a65f-f8d8-800d-b667-0dfeb6bb05ab))| Maintain best-in-class operational reliability. (Protocol Stability) |
| Operational resilience | Alternative full node clients | 1 | | ≥ 2 live, spec-conformant | Reduce single-client risk. |
| Operational resilience | Client & Infrastructure Diversity | / | Track market share of each client implementation (target: no client >33%). Measure validator distribution across cloud providers vs bare metal. Identify AWS/cloud concentration risks. | No single client >33% | Technical Resilience: Tracks market share of each client implementation with a target of no single client controlling a liveness-threatening share.<br /><br />Market share distribution of client implementations. Target: no single client >33% for liveness protection. |
| Operational resilience | Multi-dimensional Nakamoto coefficient | 22 | Count controlling entities across multiple vectors.<br /><br />Compute minimum across dimensions: stake, nodes, geography. | 22 (best) | Represents decentralization strength.<br /><br />Minimum number of entities controlling 51% of stake, nodes, geography, infra. |
| Operational resilience | Voting Power distribution of controlling stake | 35 | (total live stake - abstain DRep - NoConfidence DRep)\*0.51 > than stake of top 22 DReps | 50% + 1 lovelace effective voting power controlled by > than 22 DReps | Mitigates risk of attacks from colluded DReps |
| Adoption | Monthly submitted transactions | 900k submitted transactions per month |  | ≥ 27M submitted transactions per month  | Signals broad, recurring on-chain activity. |
| Revenue / adoption | Annual Protocol Revenue | 3.5M ada within the calendar | Annual Protocol Revenue = Submitted Transactions per year \* avg fee per submitted transaction | ≥ 16M ada (assuming an ada value of $5 and a reduction of avg fees over the 4 years from 0.3 ada to 0.05 ada) | This includes all revenue to the protocol (excluding the rewards).<br />The key metric of economic self-sufficiency and utility.<br /><br />(Revenue could come from fees, L1 and L2 services, investments and more) |
| Adoption | Enterprise integrations | / | / | ≥15 Enterprise level organization (with 5M Annual revenue) with sustained chain activity after 12 months (AKA doing avg 500 transactions per epoch) | Measure success in translating high-assurance design into business adoption. |
| Governance | DRep participation rate | / | / | \> 70% of active DReps (by stake) vote on 90% or more of governance actions. | Measure the vitality and engagement of the decision-making layer. |
| Adoption | Monthly active users | Approximately 100k-300k active wallets per month | Count unique addresses with transactions over 30-day window. | 1M | Measures active ecosystem participation + engagement.<br /><br />MAU measures number of unique wallets submitting ≥1 transaction per month; does not differentiate human activity vs wallet count. |
| Adoption | Total Value Locked (TVL) | $400–500M | Liquid staking normalization.<br />TVL = Σ locked assets. | $3B  | Capital confidence indicator. |
| Scalability | Throughput capacity per day | 300k transactions per day | ? | 3x current capacity | Tracking scalability of the system to meet adoption KPIs |


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
| **Decentralized identity (SSI)** | Embed SSI into transactions, contracts, and governance for selective privacy and compliance. | Enterprise-ready trust layer. |
| **Enterprise security & compliance** | Offer formal-methods-backed and SOC-compatible patterns. | Easier enterprise and gov procurement. |

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
