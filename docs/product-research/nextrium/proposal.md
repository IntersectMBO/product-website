---
title: "NexTrium — Original Proposal"
sidebar_label: Original Proposal
---


### NexTrium_RFP07_Proposal.pdf

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 1

# RFP 07: L2 Adoption and Interoperability Demand Study
### L2 Adoption and Interoperability Demand in African Emerging Markets: A Builder-Embedded Research Study
**Lead Organisation **NexTrium Global Innovations Ltd, Lagos, Nigeria

**Primary Contact **Abdulbasit Adigun Abdulrahman

**Email **abdulbasit@nextrium.org

**Website **https://nextrium.org

**Zivana Protocol **https://zivana.network

**RFP Number **RFP 07

**Scope **Single Research Initiative

**Submission Date **May 2026

**Submission Deadline **3 June 2026, 12PM UTC

***Conflicts of Interest Declaration:**** Abdulbasit Adigun Abdulrahman is the founder of NexTrium Global Innovations Ltd and lead contributor to Zivana Protocol, which is referenced as a primary evidence case within this research. This is declared as a potential conflict of interest and is managed through the controls described in Section 11. Samir Idris is a newly elected member of the Cardano Product Committee. This is declared and managed as described in Section 11. No additional conflicts are declared by named team members at the time of submission.*

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 2

### TABLE OF CONTENTS
**Section 1 **Cover Letter

**Section 2 **Understanding of the Brief

**Section 3 **Proposed Methodology

**Section 4 **Decision Gate Mapping

**Section 5 **Stakeholder Access Plan

**Section 6 **Value-Flow Assessment Plan

**Section 7 **Team Qualifications

**Section 8 **Workplan and Timeline

**Section 9 **Risk and Bias Mitigation

**Section 10 **Budget Breakdown

**Section 11 **Conflicts of Interest Declaration

**Section 12 **Ethics and Data Handling Statement

**Section 13 **Deliverables Plan

**Section 14 **Optional Stretch Scope

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 3

### SECTION 1: COVER LETTER
**To: Cardano Product Committee / Intersect**

**From: NexTrium Global Innovations Ltd**

**Re: Product Research Grants — RFP 07: L2 Adoption and Interoperability Demand Study**

**Date: May 2026**

The Cardano Product Committee has correctly identified that the ecosystem lacks a decision-ready map of what is actually blocking L2 deployment and which interoperability pathways create durable Cardano-side value. NexTrium Global Innovations Ltd submits this proposal to close that evidence gap from the perspective of builders who are operating within it.

NexTrium is the development entity behind Zivana Protocol, an open Layer 2 trust infrastructure protocol being built on Cardano and Midnight for the African informal economy. Over the past several months, we have validated five protocol primitives against Cardano's current infrastructure stack, covering identity, distribution, trust, oracle, and intelligence layers. That work has produced precise technical documentation of where deployment proceeds, where it stalls, and where value may route off Cardano due to missing last-mile capability. This validation work is not background context for this proposal. It is the first evidence deposit the research will build from.

Our differentiated contribution to RFP 07 is threefold. First, we bring documented, reproducible builder evidence of L2 and interoperability blockers grounded in engineering-level diagnostics with named failure modes and workaround decisions already made during active protocol validation. Second, we operate within the African informal economy builder ecosystem and have direct access to a demand segment that is structurally underserved and almost entirely absent from existing Cardano infrastructure research. Third, our own architecture has already forced us to answer the question this RFP frames as its hardest: when Cardano's infrastructure is insufficient, does value stay in the ecosystem or leave it? During validation of Zivana's distribution primitive, the team made a documented architectural decision to route covenant distributions to Celo MiniPay because Cardano currently lacks an equivalent phone-number-based stablecoin distribution rail. Celo is an Ethereum Layer 2 protocol. This means the absence of a comparable last-mile distribution capability on Cardano is not a neutral gap; it represents a documented architectural decision that, if replicated across the broader builder population, would constitute an active value-leakage pathway. This will be tested and triangulated through primary research as applicant-supplied conflicted evidence, clearly separated from independent operator and provider findings.

This proposal scopes the research tightly around what we can validate with high confidence: African emerging market builders and operators, documented L2 blockers across the Cardano infrastructure stack, and a value-flow assessment grounded in real deployment

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 4

decisions rather than theoretical corridors. We are not proposing to cover every bridge provider or every global L2 pathway. We are proposing to produce the most credible, evidence-dense, and decision-ready findings available from this demand segment, delivered on time, within budget, and with full methodology transparency.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 5

### SECTION 2: UNDERSTANDING OF THE BRIEF
The African informal economy accounts for between 30 and 40 percent of the continent's GDP, employs 83 percent of its workforce, and operates almost entirely outside formal financial infrastructure. In sub-Saharan Africa, roughly 90 percent of consumer spending is still conducted in cash. Globally, 70 percent of micro, small, and medium enterprises in emerging markets lack adequate financing to grow, with the financing gap for informal MSMEs estimated at $2.9 trillion by the International Finance Corporation. These figures establish the scale of the economic context in which this research is situated. They are not presented as evidence of Cardano adoption demand. Whether this population represents a viable Cardano adoption opportunity, and what infrastructure would need to exist for that to be the case, is precisely what this research is designed to find out.

Zivana Protocol is being built to address that gap directly. It is an open Layer 2 trust infrastructure protocol on Cardano and Midnight that makes economic capability visible, verifiable, and financeable for informal economy participants without requiring them to become formal first. Its five core primitives, covering identity, trust scoring, covenant execution, distribution, and market intelligence, are designed to function without a bank account, a registered business, a smartphone, or prior blockchain experience. Cardano is the intended settlement layer. Midnight is being validated as the privacy layer. Hyperledger Identus is the intended identity infrastructure, currently blocked by a documented DX failure under investigation. The protocol is currently in Phase 0: Foundation Verification, proving every stack component works before any protocol logic is built on top.

That verification work is directly relevant to what this RFP is asking. NexTrium's VAL-003 validation documented a reproducible technical failure in the Hyperledger Identus Cloud Agent deployment path, specifically an undocumented JVM initialisation dependency that prevents the identity primitive from running locally, despite correct schema injection and network configuration. Our VAL-006 validation revealed that Cardano currently lacks an equivalent to Celo MiniPay's phone-number-based stablecoin distribution rail. Celo is an Ethereum Layer 2 protocol. During validation of Zivana's distribution primitive, the team made a documented architectural decision that covenant distributions would need to route to Celo MiniPay because Cardano does not currently provide this capability. These are specific, reproducible, documented findings from an active builder working on Cardano, not general observations about what the ecosystem might need. These findings are treated throughout this proposal as applicant-supplied conflicted evidence, clearly separated from independent operator, provider, and external evidence, and will not be used to establish segment-level demand or high-confidence value-flow classifications without independent triangulation.

The CPC is asking three connected questions that NexTrium understands as the core of this brief. First, which applications are genuinely blocked by missing L2 capability, and what specifically would need to change for deployment to proceed? Second, where blockers exist, are they engineering problems, documentation gaps, tooling failures, or commercial uncertainties, and who is the right owner for each type? Third, which interoperability pathways would bring users, liquidity, and applications into Cardano, and which would accelerate the

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 6

flow of value toward larger ecosystems such as Ethereum?

This proposal does not attempt to answer those questions for the entire global ecosystem. The scope is the African informal economy builder population, a segment with documented demand, direct builder access, and almost no representation in existing Cardano infrastructure research. The $2.9 trillion global financing gap for informal MSMEs, the 83 percent informal employment rate across Africa, and the near-total reliance on cash transactions in sub-Saharan Africa provide contextual framing for the scale of the economic context in which this research is situated. Whether Cardano's current and planned infrastructure is positioned to serve that opportunity is an open question. This research will assess the degree to which infrastructure gaps are blocking deployment within the African informal economy builder population studied, and whether those gaps are representative of broader emerging market L2 and interoperability demand.

**Sources:**

- IFC MSME Finance: https://www.ifc.org/en/what-we-do/sector-expertise/financial-institutions/msme-finance

- UN ECA / North Africa Post (2026): https://northafricapost.com/96624-africas-informal-economy-employs-83-of-workforce-in-2024-un-data.html

- World Economic Forum (February 2026): https://www.weforum.org/stories/2026/02/how-technology-can-help-bank-africa-s-informal-economy/

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 7

### SECTION 3: PROPOSED METHODOLOGY
This research follows a screening-first, mixed-method design. The approach moves from documented internal evidence through a structured screening phase into targeted primary research with builders, operators, and infrastructure providers across the African ecosystem. Desk research alone is not sufficient for this RFP and this proposal does not rely on it as a primary evidence source.

**Phase 1: Evidence Baseline and Desk Research (Weeks 1 to 2)**

The research begins with two parallel workstreams.

The first is the internal evidence baseline. The Zivana Protocol validation stack, spanning VAL-001 through VAL-006, provides the first documented evidence layer. Each validation represents a specific infrastructure test against Cardano's current stack with reproducible outcomes.

- VAL-001 (Aiken Distribution Validator): https://github.com/zivana-labs/zivana-validation/tree/main/aiken-stub

- VAL-002 (Midnight Proof of Threshold): https://github.com/zivana-labs/zivana-validation/tree/main/midnight-threshold

- VAL-003 (Identus Setup): https://github.com/zivana-labs/zivana-validation/tree/main/identus-setup

- VAL-004 (Orcfax Schema): https://github.com/zivana-labs/zivana-validation/tree/main/orcfax-schema

- VAL-005 (Fetch.ai uAgent): https://github.com/zivana-labs/zivana-validation/tree/main/fetch-agent

- VAL-006 (Celo MiniPay): https://github.com/zivana-labs/zivana-validation/tree/main/celo-minipay

- Full Validation Repository: https://github.com/zivana-labs/zivana-validation

- Zivana Labs GitHub Organisation: https://github.com/zivana-labs

- VAL-003 documents a named technical and DX blocker in the Hyperledger Identus Cloud Agent deployment path. This finding will be documented using the Appendix B barrier taxonomy and routed to the existing developer tooling workstream via the Cross-RFP Handoff Memo. It will not be expanded into a developer tooling research recommendation within this scope. VAL-006 documents a named applicant-supplied architectural decision made during validation: that covenant distributions would need to route to Celo MiniPay, an Ethereum Layer 2, because Cardano currently lacks an equivalent last-mile payment capability. VAL-001 confirms Cardano's eUTxO settlement layer via Aiken functions correctly for the distribution use case. VAL-002 confirms Midnight's ZK proof infrastructure functions on devnet for privacy-preserving trust scoring. VAL-004 and VAL-005 confirm oracle attestation via Orcfax and agent-based intelligence via Fetch.ai are functional at the prototype level. All six validation cases are treated as applicant-supplied conflicted evidence throughout this research, clearly separated from independent builder, operator, provider, and external evidence in all analysis and deliverables, and will not be used to establish segment-level demand or value-flow classifications above low confidence without independent triangulation.

These six validation cases form the baseline evidence set. Each will be documented using the Appendix B barrier analysis template and Appendix C demand map template before any external research begins. Samir Idris will conduct an independent technical review of the VAL-003 and VAL-006 findings to establish an externally validated confidence level for the

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 8

two most critical cases before fieldwork begins.

The second workstream is desk research. Desk research will establish the current L2 and interoperability landscape relevant to the African builder context. This covers public documentation and roadmaps from Cardano L2, partner-chain, bridge, wallet, and interoperability projects; developer documentation and integration friction evidence from Identus, Midnight, Orcfax, and bridge providers; bridge and provider integration requirements documentation; ecosystem grant and funding proposal history from Cardano Catalyst and Intersect where available and relevant; and publicly available on-chain transaction, liquidity, bridge, and wallet data where meaningful. On-chain and product data will be used only where it validates demand or activity directly relevant to the decision gates. Any limitations in on-chain data coverage will be stated explicitly. Proprietary datasets are not planned. The research operations budget includes contingency for paid expert calls if bridge or provider access requires it.

Peer ecosystem benchmarking will be conducted as a core activity where it supports provider and partner recommendations. Because this proposal includes a Provider and Partner Opportunity Analysis as a required deliverable, the conditional benchmarking requirement applies. Benchmarking will focus on how peer ecosystems including Celo, Stellar, and Polygon convert L2 and interoperability into adoption in African and emerging markets. Deeper benchmarking across a wider set of ecosystems is available as optional stretch scope in Section 14.

**Phase 2: Screening (Weeks 2 to 3)**

Before any deep-dive interviews, the research team will screen candidate use cases, interoperability pathways, and potential respondents against the following criteria: claimed blocker, affected application or workflow, current workaround, evidence of demand, expected Cardano-side value, dependency risk, respondent access, decision value of deeper research, and relevance to Cardano 2030 adoption goals.

The screening phase will produce a shortlist of use cases and pathways that justify primary research depth, and a documented rationale for exclusions. This prevents the research from expanding into a general ecosystem survey and keeps every interview focused on answerable decision gates.

Interoperability pathways screened will include all pathway types the RFP specifies: bridge corridors, cross-chain messaging paths, partner-chain integrations, wallet and user-flow integrations, liquidity routing paths, asset transfer mechanisms, identity and data portability mechanisms, and other cross-chain mechanisms identified during desk research. Wallet pathways and messaging pathways are explicitly included in the screening scope alongside bridge and partner-chain pathways.

Yuguda Muhammad will lead respondent mapping and recruitment during this phase, drawing on NexTrium's existing networks across the African Cardano ecosystem.

**Phase 3: Primary Research (Weeks 3 to 7)**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 9

Primary research is conducted across four respondent categories detailed in Section 5. The total target interview range is 30 to 44 respondents. This comprises 15 to 20 builder and operator interviews in Category 1, 6 to 10 infrastructure and tooling provider interviews in Category 2, 5 to 8 bridge and interoperability provider interviews in Category 3, and 4 to 6 non-Cardano and negative-case interviews in Category 4.

All interviews will be conducted with informed consent, clear disclosure of research purpose and audience, and documented anonymisation choices. Raw notes will be stored securely and will not be published. Findings will distinguish named evidence, confidential evidence, and anonymised themes throughout.

The research will test, refine, or reject the following seven core research hypotheses: (1) Some Cardano applications are genuinely blocked by missing L2 capability. (2) L2 demand is not uniform across use cases. (3) Some apparent L2 blockers are actually non-L2 blockers caused by liquidity, wallets, bridge or provider access, tooling, commercial uncertainty, compliance, partner access, or user demand. (4) Interoperability demand is feature-specific, covering asset bridging, message passing, liquidity routing, partner-chain integration, wallet UX, identity and data portability, and settlement interoperability. (5) Interoperability pathways differ in Cardano-side value. (6) Bridge and interoperability providers have identifiable reasons for not prioritising Cardano. (7) A reusable evidence standard can improve future funding decisions.

**Phase 4: Analysis and Classification (Weeks 7 to 9)**

Interview findings will be analysed against the RFP's decision gates. Before any blocker is recorded in the L2 Barrier Analysis, it must pass a relevance test confirming it directly blocks a specific L2 or interoperability workflow. General infrastructure complaints or ecosystem observations that do not tie to a named L2 or interoperability use case will not be classified as L2 blockers and will be routed to the appropriate adjacent workstream via the Cross-RFP Handoff Memo. Each blocker that passes the relevance test will be classified using the Appendix B taxonomy across eight dimensions: type, severity, adoption impact, urgency, owner or workstream, evidence confidence, affected use case, and evidence source. Blocker types covered are technical, commercial, ecosystem, liquidity, UX, tooling, coordination, compliance, and unknown. Ecosystem blockers are distinct from tooling blockers and include missing wallet support, insufficient developer community presence, and weak business development coverage.

Each blocker will be assigned a recommended action from the following set: fund engineering, improve documentation, pursue wallet support, establish bridge or provider partnerships, coordinate liquidity, provide commercial incentives, activate builders, or reject.

All demand estimates will be presented as indicative ranges with stated assumptions and confidence ratings. The research will not produce precise market sizing or adoption forecasts where the evidence does not support that precision. Demand map entries will include all nine required dimensions from the Appendix C template. Interoperability requirements register entries will include all eight required dimensions from the Appendix D template including adoption consequence.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 10

Each interoperability pathway classification will systematically state all six required value-flow elements: expected inflows into Cardano covering users, liquidity, applications, transactions, and partner access; potential outflows; retention mechanism or Cardano-side benefit; dependency risk; evidence supporting the classification; and confidence level.

Major findings will be triangulated where feasible using more than one evidence type. Bridge volume data will only be used where source, destination, and retention analysis accompanies it.

**Phase 5: Deliverables and Reporting (Weeks 9 to 12)**

All required deliverables will be produced in this phase as detailed in Section 13. Liquidity findings will be classified as blockers and routed to the appropriate adjacent workstream via the Cross-RFP Handoff Memo. Liquidity incentive design is outside the scope of this research. The Evidence Threshold Framework is scoped to evidence standards for L2 and interoperability proposals specifically and will not extend into broader ecosystem funding mechanism design.

The public summary will be written to be useful to builders, funders, and ecosystem teams without exposing confidential respondent information, unreleased roadmap details, or commercially sensitive provider data.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 11

### SECTION 4: DECISION GATE MAPPING
The RFP requires that every method and deliverable maps directly to its decision gates. The following maps how NexTrium's methodology answers each gate, what evidence type is used, and which deliverable carries the finding.

**Decision Gate **Gate 1: Which applications or use cases are actually blocked by missing L2 capability?

**Method **Builder and operator interviews cross-referenced against VAL-001 through VAL-006 baseline evidence. Findings triangulated across at least two evidence types.

**Evidence Type **Named application evidence, deployment blocker documentation, workaround analysis, internal validation cases with external technical review.

**Deliverable **Blocked-Demand Case Register, L2 Demand Map.

**Starting Evidence**

VAL-003 Identus failure and VAL-006 Celo MiniPay architectural decision serve as applicant-supplied conflicted starting evidence, clearly separated from independent demand evidence throughout the research. Minimum 8 to 15 documented cases committed across named, confidential, and anonymised categories.

**Decision Gate **Gate 2: What type of L2 capability would unlock the most immediate adoption value?

**Method **Ranked requirements across throughput, latency, cost, privacy, state management, composability, developer tooling, UX, settlement, and integration burden.

**Evidence Type **Requirements register from operator interviews cross-referenced against internal validation and infrastructure provider interviews.

**Deliverable **Interoperability Requirements Register, L2 Barrier Analysis.

**Starting Evidence**

VAL-002 Midnight ZK privacy functional. VAL-003 Identus DX blocked. VAL-001 Aiken eUTxO works.

**Decision Gate **Gate 3: Which L2 blockers are technical, commercial, ecosystem, or coordination problems?

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 12

**Method **Barrier classification using full Appendix B taxonomy across eight dimensions. Action categories: fund engineering, improve documentation, pursue wallet support, establish bridge or provider partnerships, coordinate liquidity, provide commercial incentives, activate builders, or reject.

**Evidence Type **Builder interviews, infrastructure provider interviews, internal validation diagnostics, technical review by Samir Idris.

**Deliverable **L2 Barrier Analysis, Technical and Commercial Blocker Taxonomy.

**Starting Evidence**

VAL-003: technical plus DX, action improve documentation and coordination. VAL-006: missing ecosystem capability, action fund engineering or partner.

**Decision Gate **Gate 4: Which applications waiting on L2 represent meaningful demand at scale?

**Method **Demand mapping with all nine required dimensions including deployment condition, expected adoption pathway, and timing assumptions. Scale estimates as indicative ranges with stated assumptions.

**Evidence Type **Builder interviews, on-chain data where available with stated limitations, non-Cardano comparisons, IFC and WEF data as contextual framing only.

**Deliverable **L2 Demand Map.

**Starting Evidence**

Zivana Sovela application and Balogun Market operator network as baseline demand cases.

**Decision Gate **Gate 5: What interoperability features do builders and operators actually need?

**Method **Requirements register across all eight dimensions including adoption consequence. Feature types tested: asset bridging, message passing, liquidity routing, partner-chain integration, wallet UX, identity and data portability, settlement interoperability.

**Evidence Type **Operator interviews, bridge and provider interviews, internal validation findings from VAL-005 and VAL-006.

**Deliverable **Interoperability Requirements Register.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 13

**Starting Evidence**

VAL-006: phone-number-based stablecoin rail needed. VAL-005: Fetch.ai intelligence layer functional.

**Decision Gate **Gate 6: Which interoperability pathways are net-positive for Cardano?

**Method **Value-flow assessment using five-category framework. All six elements stated for every pathway: expected inflows (users, liquidity, applications, transactions, partner access), potential outflows, retention mechanism, dependency risk, evidence, and confidence. Classifications are demand assessments, not architecture recommendations.

**Evidence Type **Provider interviews, builder interviews, internal validation findings, negative-case respondent data.

**Deliverable **Interoperability Value-Flow Assessment.

**Starting Evidence**

Midnight: value-accretive (low confidence, applicant-supplied). Orcfax: mutual-value (low confidence, applicant-supplied). Fetch.ai: neutral-access (low confidence, applicant-supplied). Celo MiniPay: dependency-risk to value-leakage risk (low confidence, applicant-supplied conflicted evidence, pending triangulation with independent builders, providers, public data, or negative-case evidence). Identus: pending Phase 1 technical review. All pre-classifications are applicant-supplied conflicted evidence, clearly separated from independent evidence throughout.

**Decision Gate **Gate 7: Which interoperability pathways create asymmetric dependency or value-leakage risk?

**Method **Analysis of value direction across each pathway. Bridge volume data used only where source, destination, and retention analysis accompanies it.

**Evidence Type **Internal validation findings, provider interviews, non-Cardano builder interviews, on-chain data with stated limitations.

**Deliverable **Interoperability Value-Flow Assessment, Negative-Case and Non-Cardano Evidence Summary.

**Starting Evidence**

NexTrium's VAL-006 architectural decision represents applicant-supplied conflicted evidence of a potential value-leakage pathway. This will be tested through primary research with independent builders and providers before any confirmed classification is assigned.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 14

**Decision Gate **Gate 8: Which bridge, partner-chain, or cross-chain partners should Cardano prioritise?

**Method **Provider and partner opportunity analysis across all nine Appendix F dimensions including commercial incentive and technical effort. Recommended actions: fund now, coordinate, partner, monitor, defer, or reject. Supported by peer ecosystem benchmarking.

**Evidence Type **Provider interviews, builder interviews, internal validation findings, public documentation review.

**Deliverable **Provider and Partner Opportunity Analysis.

**Starting Evidence**

Named provider shortlist in Section 5 including Wanchain, Milkomeda, Rosen Bridge, Celo, XDAO.

**Decision Gate **Gate 9: What is preventing bridge and interoperability providers from prioritising Cardano?

**Method **Direct provider interviews testing whether blockers are demand, integration cost, technical complexity, liquidity, security risk, incentive misalignment, commercial opportunity cost, or lack of ecosystem support.

**Evidence Type **Provider interviews, negative-case respondent data, public integration requirement documentation.

**Deliverable **Provider and Partner Opportunity Analysis, Negative-Case and Non-Cardano Evidence Summary.

**Starting Evidence**

None. This gate requires primary research. No assumptions made.

**Decision Gate **Gate 10: What evidence should be required before funding L2 or interoperability proposals?

**Method **Evidence threshold framework across five dimensions: demand evidence, blocker severity, value-flow benefit, adoption pathway, and measurable outcomes. Scoped to L2 and interoperability proposals specifically. Does not extend into broader ecosystem funding mechanism design.

**Evidence Type **Synthesised from all research phases.

**Deliverable **Evidence Threshold Framework using Appendix G template.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 15

**Starting Evidence**

Framework grounded in what this research found credible versus insufficient.

**Decision Gate **Gate 11: Which findings should be handed to adjacent RFPs or workstreams?

**Method **Cross-RFP dependency mapping throughout the research. Findings routed to: RFP 2 (stablecoin liquidity), RFP 3 (use-case positioning), RFP 5 (enterprise and RWA readiness), RFP 6 (government and emerging market entry), RFP 8 (delivery partners), RFP 09 (AI commercial positioning, scope confirmed, for Fetch.ai and ASI Cloud intelligence primitive findings where they touch AI commercial positioning rather than interoperability demand classification), DevX workstream, wallets workstream, liquidity workstream, and technical roadmap workstream. Scope assignments for RFPs 2, 3, 5, 6, and 8 will be confirmed with CPC at the Research Design Review in Milestone 1.

**Evidence Type **Synthesised from all research phases.

**Deliverable **Cross-RFP Handoff Memo.

**Starting Evidence**

VAL-003 DX finding routed to DevX workstream. Celo MiniPay liquidity finding routed to RFP 2.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 16

### SECTION 5: STAKEHOLDER ACCESS PLAN
A research proposal is only as strong as its access to real respondents. This section documents who NexTrium can reach, why those respondents are relevant, how they map to the use cases and pathways identified in the screening phase, and how insider bias and provider self-interest will be controlled.

**Team and Access Roles**

**Abdulbasit Adigun Abdulrahman**

Lead Researcher. Owns research design, all interviews, analysis, and deliverables. Builder credibility enables access to African Web3 respondents unfamiliar to external firms.

**Yuguda Muhammad **Research Coordinator. Owns respondent mapping, scheduling, note-taking, and data management across all four milestones.

**Samir Idris **Technical Advisor. Owns independent technical validation of VAL-003 and VAL-006 findings and review of provider claims during analysis phase.

**Respondent to Use Case and Pathway Mapping**

Each respondent category maps directly to specific use cases and interoperability pathways identified during the screening phase. Category 1 respondents map to blocked-demand cases in the African informal economy, specifically identity-dependent applications, covenant distribution workflows, trust scoring use cases, and oracle-attested economic activity. Category 2 respondents map to the infrastructure pathways underlying those use cases. Category 3 respondents map to the interoperability pathways screened for value-flow classification, covering bridge corridors, wallet integrations, messaging paths, and liquidity routing. Category 4 respondents map to the negative-case evidence base, providing external reference points for what deployment decisions look like when Cardano's infrastructure is not chosen.

**Respondent Category 1: African Informal Economy Builders and Operators on Cardano**

**Target range: 15 to 20 interviews.**

**Respondent Type Access Pathway Relevance**

Zivana Protocol / NexTrium

Lead builder Internal Applicant-supplied conflicted evidence. Findings treated separately from all independent evidence throughout and not used to establish segment-level demand without triangulation.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 17

**Respondent Type Access Pathway Relevance**

WADA community builders

Builder network Direct — WADA relationship

African Cardano application builders

African Cardano Catalyst funded teams

Builder network Direct — Catalyst community

Teams with deployment experience

UCSC Nigeria alumni network

Student builders

Direct — Abdulbasit former VP

Early-stage Lagos builders

UNILAG Web3 mentorship alumni

Student builders

Direct — UNILAG mentorship

Lagos-based builders

Balogun Market operator network

Informal economy operators

Direct — Sovela planned Market Reporter Network outreach infrastructure, currently in development

End-user population, demand evidence source

Web3Bridge Africa Developer training org

Community — Lagos Web3

Cross-chain exposure including Lisk

**Respondent Category 2: Infrastructure, Tooling, and Identity Providers**

**Target range: 6 to 10 interviews.**

**Respondent Type Access Pathway Relevance**

Hyperledger Identus maintainer community

Identity infrastructure

Direct — VAL-003 diagnostic work

VAL-003 blocker resolution pathway

Midnight Network developer community

ZK privacy infrastructure

Direct — VAL-002 devnet work

Partner chain, value-accretive

Orcfax Oracle infrastructure

Direct — VAL-004 schema work

Oracle layer, mutual-value

Fetch.ai / Agentverse community

Intelligence infrastructure

Direct — VAL-005 deployment

Intelligence layer, neutral-access

Input Output / IOG infrastructure teams

Core Cardano infrastructure

Ecosystem — Cardano Intersect

L2 roadmap assumptions

Charli3 Oracle infrastructure

Ecosystem — Cardano community

Secondary oracle provider

**Respondent Category 3: Bridge, Interoperability, and Wallet Providers**

**Target range: 5 to 8 interviews.**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 18

**Respondent Type Access Pathway Starting Classification**

Wanchain Decentralised bridge

Structured outreach Neutral-access to dependency-risk

Milkomeda EVM sidechain and bridge

Structured outreach Mutual-value to neutral-access

Rosen Bridge UTxO-native bridge

Structured outreach Neutral-access

Celo / MiniPay team Ethereum L2, stablecoin rail

Active — VAL-006 work

Dependency-risk to value-leakage risk

XDAO DAO tooling provider

Direct — existing relationship

Not yet classified

Swifin or Reltime Cross-border payment platform

Structured outreach Dependency-risk

**Respondent Category 4: Non-Cardano Builders and Negative-Case Respondents**

**Target range: 4 to 6 interviews.**

**Respondent Type Access Pathway Relevance**

Celo ecosystem builders Alternative chain builders

Direct — VAL-006 community

Chose Celo for last-mile payments

Stellar / Soroban builders Alternative chain builders

Community — African fintech

Stellar for African remittance

Polygon builders in Africa Alternative chain builders

Community — Lagos Web3

Chose Polygon for DeFi or identity

XDAO team DAO tooling non-Cardano

Direct — existing relationship

Has not prioritised Cardano

Web3Bridge Africa Lisk builders

Alternative chain builders

Community — Web3Bridge

Chose Lisk over Cardano

**Recruitment and Consent Protocol**

All respondents will be contacted with a clear description of the research purpose, the commissioning body, and how their input may be used. Respondents will be offered the choice of named attribution, anonymised attribution, or fully confidential treatment before the interview begins. No respondent will be recorded without explicit consent. Raw notes will be stored securely by Yuguda Muhammad and will not be shared outside the research team without the respondent's permission.

**Access Limitations and Honest Disclosure**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 19

NexTrium acknowledges two access limitations. First, the bridge, interoperability, and wallet provider category is the weakest in terms of existing relationships. If outreach does not yield the target range, this will be disclosed at the Stakeholder Access Check milestone and confidence levels adjusted accordingly. Second, the total respondent range of 30 to 44 is below the RFP's suggested upper range. This is a deliberate scope decision. The African informal economy represents precisely the kind of net-new user and application population the RFP identifies as the hardest question to answer, and a tightly scoped study of this segment produces stronger evidence on that question than a broader study that treats it as one data point among many. This is consistent with the RFP's own guidance that a narrower proposal with credible respondent access and strong decision value may be stronger than a broad proposal covering many pathways superficially. The limitations of this narrower scope should be acknowledged explicitly. Findings will be most confident for the Lagos and Nigerian informal economy builder population and may not fully represent L2 and interoperability demand patterns across East African, Francophone African, or Southern African markets. Respondent access for bridge and wallet provider categories may be insufficient to produce high-confidence provider-side classifications without the expanded outreach available under the stretch scope items in Section 14. These limitations will be stated explicitly in the Research Methodology Appendix and the public summary.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 20

### SECTION 6: VALUE-FLOW ASSESSMENT PLAN
The value-flow assessment is the most analytically demanding part of this RFP. It requires the research to make a principled judgment about which interoperability pathways benefit Cardano and which create risk. This section explains how NexTrium will conduct that assessment.

**Starting Framework**

The RFP defines five value-flow categories: value-accretive, mutual-value, neutral-access, dependency-risk, and value-leakage risk. NexTrium will apply these categories to every interoperability pathway identified during the screening phase. These classifications are demand and value-flow assessments. They are not architecture recommendations, bridge implementation proposals, liquidity incentive designs, or technical roadmap prescriptions. All five pre-classifications below are derived from NexTrium's own validation work and are treated as applicant-supplied conflicted evidence throughout this research. They are clearly separated from independent evidence and will not be used to establish segment-level demand or to assign a confidence level above low without triangulation from independent builders, providers, public data, or negative-case evidence.

Every pathway classification will systematically state all six required elements: (1) what the pathway is expected to bring into Cardano, covering users, liquidity, applications, transactions, and partner access as distinct inflow dimensions; (2) what may leave Cardano; (3) what retention mechanism or Cardano-side benefit exists; (4) what dependency risk exists; (5) what evidence supports the classification; (6) what confidence level applies.

No pathway will be classified as value-accretive or mutual-value on the basis of technical possibility, roadmap existence, community sentiment, or interoperability for its own sake.

**Pre-Classification from Validation Work**

**Midnight as ZK Partner Chain**

**Classification: Preliminary: Value-Accretive**

**Expected Inflows **ZK privacy capability unavailable on Cardano L1, retaining users and application logic within the Cardano ecosystem. Partner access through Midnight developer community.

**Potential Outflows**

Minimal. Midnight settles on Cardano. Application logic anchoring returns to Cardano.

**Retention Mechanism**

In Zivana Protocol's architecture, Midnight is being validated with Cardano as the settlement layer, meaning trust proof anchoring returns to Cardano for finality. This is specific to how Zivana is building on Midnight and does not constitute a universal claim about Midnight's architecture in other contexts.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 21

**Dependency Risk **Low. The dependency runs toward Cardano rather than away from it.

**Evidence **VAL-002 confirms ZK proof infrastructure functions on devnet for trust scoring use case.

**Confidence Level **Low confidence as applicant-supplied evidence. Upgradeable to medium confidence following independent Midnight developer community interview validation.

**Orcfax Oracle Integration**

**Classification: Preliminary: Mutual-Value**

**Expected Inflows **Verified economic activity data consumable by Cardano smart contracts. Revenue attestation for informal economy operators creates new application possibilities on Cardano.

**Potential Outflows**

Minimal. Oracle data is published to Cardano, not away from it.

**Retention Mechanism**

Orcfax's value proposition depends on Cardano smart contract consumption.

**Dependency Risk **Low. No user or liquidity routing away from Cardano.

**Evidence **VAL-004 confirms Orcfax revenue event fact statements publishable to testnet and queryable via Lucid on Cardano preprod.

**Confidence Level **Low confidence as applicant-supplied evidence. Upgradeable to medium confidence following independent Orcfax interview validation.

**Fetch.ai and ASI Cloud for Intelligence**

**Classification: Preliminary: Neutral-Access**

**Expected Inflows **Compute and agent orchestration capability. Market intelligence outputs formatted as Orcfax-compatible facts feed back into Cardano application layer.

**Potential Outflows**

No user or liquidity extraction.

**Retention Mechanism**

Intelligence outputs consumed by Cardano applications. No independent user base created on Fetch.ai.

**Dependency Risk **Low for Cardano. Creates dependency on ASI Cloud compute but does not route value away from Cardano.

**Evidence **VAL-005 confirms uAgent deployment, ASI Cloud function call, and Orcfax-compatible JSON output.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 22

**Confidence Level **Low confidence as applicant-supplied evidence. Upgradeable to medium confidence following independent Fetch.ai community interview validation.

**Celo MiniPay for Last-Mile Distribution**

**Classification: Preliminary: Dependency-Risk to Value-Leakage Risk**

**Expected Inflows **Nothing directly. This pathway routes value away from Cardano at the distribution layer.

**Potential Outflows**

Covenant distribution flows. Application-layer value generated by Cardano-settled covenants distributed via Celo MiniPay, an Ethereum L2.

**Retention Mechanism**

None currently. No Cardano-side stablecoin distribution rail with comparable phone-number-based UX and sub-cent fees.

**Dependency Risk **High. Celo is an Ethereum L2. This pathway connects Cardano application-layer value directly to the Ethereum ecosystem.

**Evidence **VAL-006 documents the applicant-supplied architectural decision made during protocol validation. The capability gap is reproducible and documented. Note: bridge volume data used only where source, destination, and retention analysis accompanies it.

**Confidence Level **Low confidence as applicant-supplied conflicted evidence. Upgradeable to medium confidence only following triangulation with independent builders, providers, public data, or negative-case evidence.

**Hyperledger Identus Identity Integration**

**Classification: Pending — Classification Blocked by VAL-003**

**Expected Inflows **W3C DID-anchored credentials on Cardano, verifiable credential issuance, identity infrastructure for trust without formal documentation.

**Potential Outflows**

Cannot be assessed until deployment is achievable.

**Retention Mechanism**

DID anchoring on Cardano creates a structural retention mechanism if integration functions correctly.

**Dependency Risk **Unknown pending VAL-003 resolution.

**Evidence **VAL-003 documents a fatal deployment blocker. Not yet tested end-to-end. If Phase 1 review determines the blocker is a deeper architectural constraint rather than a DX gap, the pathway will be classified as blocked and routed to the Cross-RFP Handoff Memo.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 23

**Confidence Level **Low. Classification assigned following Phase 1 technical review and Identus maintainer community interview.

**Classification Process and Confidence Labelling**

Each pathway classification will state the preliminary classification at low confidence as applicant-supplied evidence, test it through primary research, and produce a final classification with evidence basis, confidence level, dissenting evidence, and recommended action (fund now, coordinate, partner, monitor, defer, or reject). These six pathway-level actions apply to interoperability pathway recommendations. The eight blocker-level action categories described in Section 9, covering fund engineering, improve documentation, pursue wallet support, establish bridge or provider partnerships, coordinate liquidity, provide commercial incentives, activate builders, and reject, apply specifically to barrier classifications in the L2 Barrier Analysis. Where triangulation across multiple evidence types is possible, confidence will be raised from low to medium or high. No classification will be presented without a stated confidence level and evidence source. Forward-looking statements will be framed as evidence-based sequencing recommendations, not technical roadmap prescriptions.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 24

### SECTION 7: TEAM QUALIFICATIONS
**Abdulbasit Adigun Abdulrahman — Lead Researcher and Principal Investigator**

Abdulbasit is the founder and director of NexTrium Global Innovations Ltd, the incorporated successor to NexTrend Group. NexTrend Group was the operating identity under which Abdulbasit built his Cardano ecosystem presence, community relationships, and builder track record over several years. The transition to NexTrium reflects formal incorporation under the Corporate Affairs Commission of Nigeria, not a change in personnel, direction, or community standing. Every relationship, credential, and contribution built under NexTrend carries forward into NexTrium. The CPC should treat NexTrium as a formalised continuation of an established Cardano ecosystem presence, not as a new entrant.

He holds a BSc in Mathematics Education from the University of Lagos and brings a combination of technical building experience, ecosystem leadership, and community access directly relevant to this research.

On the technical side, he has led the design and validation of Zivana Protocol's five-primitive architecture across Cardano, Midnight, Hyperledger Identus, Orcfax, and Fetch.ai, producing the applicant-supplied conflicted starting evidence that forms this research's baseline evidence set, to be triangulated through independent primary research. He builds primarily in TypeScript, Node.js, and Aiken, and works across the full stack from smart contract logic to frontend interfaces.

On the ecosystem side, he serves as Governance Research Lead at Prisma Protocol, contributing to the litepaper as lead for the Governance, Trust, and Decision-Making domain. He has contributed to the broader ecosystem as DEEP Fund Marketing Coordinator and Ecosystem Contributor to ASI Alliance. He served as Vice President of the Unified Cardano Students Club Nigeria and is an active participant in Cardano Intersect, the WADA community, and the African Cardano Catalyst community. He has organised and contributed to events including the Cardano African Tech Summit, the Sandbox Hackathon, and the NexTrend Hub and WADA Hub launches.

**GitHub: **https://github.com/Basrahtop

**X / Twitter: **https://x.com/Basrahtop

**Portfolio: **https://devbasrahtop.com

**NexTrend X: **https://x.com/nextrendlabs

**NexTrium: **https://nextrium.org

**Yuguda Muhammad — Research Coordinator**

Yuguda Muhammad serves as Research Coordinator for this project. His responsibilities cover respondent mapping and recruitment across all four interview categories, interview

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 25

scheduling and logistics, structured note-taking and transcript organisation during sessions, data filing and version-controlled documentation management, and coordination of the research timeline across all four milestones.

He holds a BSc in Physics from Ahmadu Bello University and brings a combination of technical systems thinking, structured documentation practice, and cross-functional coordination experience directly applicable to this research.

At Adept Engineering Solutions, he produced comprehensive technical documentation of pipeline methodology, data schemas, and retrieval architecture for cross-team engineering review. He built and maintained compliance automation services tracking submission requirements, structural conformance, and content compliance across live federal solicitation documents, establishing fluency in structured checklist management, requirement traceability, and gap identification that maps directly onto the data organisation demands of this role.

He designed and operated output quality scoring systems at Adept, improving measured output quality scores from 30 percent to over 90 percent through iterative evaluation and refinement. His parallel work in LLM evaluation and annotation at Turing involved systematic written assessment of model outputs across large volumes of structured data with documented findings submitted against strict quality and schema standards.

**LinkedIn: **https://linkedin.com/in/yuguda

**GitHub: **https://github.com/Yuguda999

**Samir Idris — Technical Advisor**

Samir is a newly elected member of the Cardano Product Committee through the most recent Intersect election. He is an active Cardano builder with a track record of shipping production-level systems across multiple mainnet protocols including Minswap, FluidTokens, Metera, and Statera.

His technical work spans on-chain smart contract development using Aiken, covering lending protocols, DEX components, and batching and order-processing systems within the eUTxO model, and off-chain transaction construction using TypeScript with MeshJS and Lucid Evolution. He designed and implemented the complete smart contract system for Statera, a zero-interest lending and borrowing protocol on Cardano, and contributed to and optimised core contract flows at Minswap including a CIP-113 based implementation shipped to mainnet.

His CPC membership means he brings direct institutional familiarity with the decision context this research serves. His builder background means he can assess technical blocker claims against the reality of what shipping on Cardano's mainnet actually requires.

Within this project, Samir's mandate is scoped to two tasks: independent technical review of VAL-003 and VAL-006 findings before primary fieldwork begins, and technical review of infrastructure provider claims during the analysis phase. His technical review of VAL-003 and VAL-006 in Milestone 1 serves specifically to assess whether these applicant-supplied

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 26

findings represent reproducible and inspectable evidence that can be elevated from applicant-supplied conflicted evidence toward independently validated evidence. His CPC membership is declared as a potential conflict of interest and is managed as described in Section 11.

**Linktree: **https://linktr.ee/scisamir

**Team Structure and Scope Boundaries**

The three-person team is structured around a clear division of responsibilities. The lead researcher owns research design, interview conduct, analysis, and all deliverables. The research coordinator owns respondent access, logistics, and data management. The technical advisor owns technical validation of specific findings and is not responsible for research design or deliverable production. This structure is lean by design, consistent with the tightly defined research scope and the cost efficiency commitment of this proposal.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 27

### SECTION 8: WORKPLAN AND TIMELINE
The research is proposed as a 12-week project commencing from the kickoff date following award notification. On the assumption of award notification by 10 June 2026 and kickoff on Monday 22 June 2026, the research would run through Friday 11 September 2026.

**Four-Milestone Structure**

**M1: Foundation and Screening**

**Dates: 22 June — 10 July 2026**

**Activities: **Research design confirmed with CPC, all six VAL cases documented using Appendix B and C templates as applicant-supplied conflicted evidence, Samir Idris technical review of VAL-003 and VAL-006 complete to assess whether these findings are reproducible and inspectable and can be elevated from applicant-supplied conflicted evidence toward independently validated evidence, desk research complete, screening report produced, respondent shortlist finalised, stakeholder access check completed.

**Key Outputs: **Research design document, preliminary VAL-case evidence set, desk research summary, screening report, access status update.

**M2: Primary Research**

**Dates: 6 July — 7 August 2026**

**Activities: **All 30 to 44 interviews conducted across four categories. Builder and operator interviews Weeks 3 to 5, infrastructure and provider interviews Weeks 4 to 6, non-Cardano and negative-case interviews Weeks 5 to 7. Phases overlap deliberately for schedule resilience. Initial blocked-demand case register produced. Each initial blocked-demand case checked against the relevant L2 or interoperability workflow test confirming the blocker directly ties to a named L2 or interoperability use case before being recorded. Early demand signal review delivered to CPC.

**Key Outputs: **Initial blocked-demand case register (minimum 8 to 15 cases). Early demand signal review.

**M3: Analysis and Draft Deliverables**

**Dates: 3 August — 4 September 2026**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 28

**Activities: **All blockers classified across eight dimensions using full Appendix B taxonomy. Final value-flow classifications produced for all screened pathways with all six elements stated systematically. Requirements register compiled. Provider and partner opportunity analysis produced. All confidence levels applied with triangulation noted. Interim findings review and draft deliverables review completed with CPC.

**Key Outputs: **Draft L2 Barrier Analysis, Draft L2 Demand Map, Draft Interoperability Requirements Register, Draft Value-Flow Assessment, Draft Provider Analysis, Draft Investment Sequencing, Draft Evidence Threshold Framework, Draft Cross-RFP Handoff Memo, Draft Executive Decision Memo.

**M4: Final Deliverables and Publication**

**Dates: 7 September — 11 September 2026**

**Activities: **CPC feedback incorporated from M3 draft review. All deliverables finalised. Final presentation delivered to CPC on 8 September 2026. Public summary reviewed with CPC on 10 September 2026 and published following approval. The M4 payment of 20 percent reflects that the bulk of analytical work is completed and accepted in M3. M4 covers final refinement, presentation delivery, and public summary publication.

**Key Outputs: **Final Research Report, Final Presentation (8 September), Public Summary (published post-CPC approval), all supporting deliverables in final form.

**Detailed Weekly Workplan**

**Period Dates Phase CPC Checkpoint**

Week 1 22—26 Jun Kickoff and Alignment Kickoff Meeting — 23 Jun

Weeks 1—2 22 Jun—3 Jul Evidence Baseline, Desk Research, Research Design

Research Design Review — 3 Jul

Weeks 2—3 29 Jun—10 Jul Screening Phase Screening Review and Stakeholder Access Check — 10 Jul

Weeks 3—5 6 Jul—24 Jul Builder and Operator Interviews Early Demand Signal Review — 24 Jul

Weeks 4—6 13 Jul—31 Jul Infrastructure, Bridge, and Provider Interviews

None scheduled

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 29

**Period Dates Phase CPC Checkpoint**

Weeks 5—7 20 Jul—7 Aug Non-Cardano and Negative-Case Interviews

None scheduled

Weeks 7—9 3 Aug—21 Aug Analysis and Classification Interim Findings Review — 13 Aug

Weeks 9—11

17 Aug—4 Sep Deliverable Production Draft Deliverables Review — 28 Aug

Week 12 7—11 Sep Final Report and Public Summary Final Presentation — 8 Sep; Public Summary Review — 10 Sep

*Note: M2 dates of 6 July to 7 August 2026 encompass all three overlapping primary research phases running in parallel. The overlap is intentional and builds resilience into the interview schedule.*

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 30

### SECTION 9: RISK AND BIAS MITIGATION
The RFP requires a research integrity plan. This section maps each risk to a named control, explains how NexTrium will implement it, and acknowledges residual risk.

**Risk 1: Cardano Insider Bias**

**Description **NexTrium is a Cardano builder with a direct interest in Cardano's infrastructure improving.

**Control **Four controls: (1) Non-Cardano and negative-case respondents required, not optional, presented without positive filtering. (2) All major findings distinguish Cardano-insider from external evidence explicitly. All evidence derived from NexTrium's own validation work is treated as applicant-supplied conflicted evidence throughout the research, clearly separated from independent operator, provider, and external evidence in all analysis and deliverables. (3) Samir Idris technical review tests whether blocker classifications reflect general ecosystem reality not just Zivana's architecture, and specifically assesses whether applicant-supplied VAL findings can be elevated toward independently validated evidence. (4) Conflicts declaration in Section 11 discloses the lead researcher's builder position.

**Residual Risk **Low to medium. The negative-case respondent category is the primary structural safeguard.

**Risk 2: Technical Roadmap Bias**

**Description **Risk that research frames blockers in terms of what Zivana needs rather than what the broader builder population needs.

**Control **All roadmap assumptions tested against builder and operator interview evidence before presentation as findings. Samir Idris flags any finding where blocker classification reflects Zivana-specific constraints rather than broadly shared barriers. All forward-looking recommendations framed as evidence-based sequencing recommendations, not roadmap prescriptions.

**Residual Risk **Low. The screening phase surfaces use cases beyond Zivana's own architecture.

**Risk 3: Provider Self-Interest**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 31

**Description **Infrastructure and bridge providers have incentives to present their roadmap positively and overstate integration value.

**Control **Evidence from providers seeking funding or support labelled accordingly and treated as separate from independent demand evidence. Provider claims cross-referenced against builder-side evidence and public documentation. Samir Idris reviews technically complex provider claims. Provider interviews specifically test whether blockers are demand, integration cost, technical complexity, liquidity, security risk, incentive misalignment, commercial opportunity cost, or lack of ecosystem support.

**Residual Risk **Medium. The confidence labelling system is the primary mitigation.

**Risk 4: False L2 Demand**

**Description **Builders may claim L2 dependency for applications where the actual blocker is liquidity, wallets, integrations, tooling, commercial uncertainty, compliance, partner access, or user demand.

**Control **Every demand claim requires identification of a specific blocked workflow and a specific deployment decision pending resolution. Every blocker claim will be tested against the relevant L2 or interoperability workflow requirement confirming the blocker directly ties to a named L2 or interoperability use case, not a general infrastructure observation. The seven non-L2 blocker types tested explicitly are: liquidity gaps, wallet support gaps, bridge or provider access gaps, tooling failures, commercial uncertainty, compliance constraints, partner access barriers, and user demand shortfalls.

**Residual Risk **Low. The RFP's own definitions of blocked demand and cosmetic signal are adopted as the evidence standard.

**Risk 5: Misclassified Blockers**

**Description **A technical blocker may actually be a documentation failure, DX gap, ecosystem problem, or commercial uncertainty.

**Control **Full Appendix B taxonomy separates nine blocker types: technical, commercial, ecosystem, liquidity, UX, tooling, coordination, compliance, and unknown. Ecosystem blockers treated as distinct from tooling blockers. Every blocker assigned a recommended action from the full set including reject.

**Residual Risk **Low to medium. Ambiguous blockers classified as unknown with explicit explanation.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 32

**Risk 6: Interoperability Optimism Bias**

**Description **General tendency to treat more interoperability as automatically positive.

**Control **Celo MiniPay pre-classified as dependency-risk to value-leakage risk demonstrates willingness to document unfavourable findings. Value-flow assessment requires evidence of retention mechanisms before positive classification. The full range of interoperability feature types tested explicitly during interviews.

**Residual Risk **Low. Pre-classification of own distribution infrastructure as value-leakage risk signals this control is applied in good faith.

**Risk 7: False Precision**

**Description **Demand estimates presented with more precision than evidence supports.

**Control **All scale estimates presented as indicative ranges with stated assumptions and confidence levels. IFC and WEF figures used as contextual framing only, not as demand evidence for Cardano adoption specifically. Bridge volume data used only where source, destination, and retention analysis accompanies it.

**Residual Risk **Low.

**Risk 8: Weak Respondent Access**

**Description **Bridge and provider outreach may not yield sufficient responses.

**Control **Risk disclosed proactively. If outreach does not yield target range by end of screening phase, reported to CPC at Stakeholder Access Check. Confidence levels for provider-side findings adjusted accordingly.

**Residual Risk **Medium. Most honest residual risk in this proposal.

**Risk 9: Scope Creep**

**Description **Findings in adjacent areas may expand scope beyond what the team can deliver.

**Control **Cross-RFP Handoff Memo routes all adjacent findings rather than absorbing them. Liquidity incentive design, technical roadmap authorship, bridge implementation, and L2 protocol design explicitly outside scope.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 33

**Residual Risk **Low.

**Risk 10: Confidentiality Reducing Public Usefulness**

**Description **Excessive confidentiality may make the public summary too vague to be useful.

**Control **Default approach publishes findings at theme and category level rather than named-respondent level. Named evidence withheld only where respondent requests confidentiality or where publication creates commercial, security, or competitive risk.

**Residual Risk **Low.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 34

### SECTION 10: BUDGET BREAKDOWN
**Total Proposed Budget: 25,000 ADA**

**Market Rate Benchmarks**

The following verified market rates are used as reference benchmarks for individual compensation in this proposal. The average hourly pay for a blockchain consultant in the United States is approximately $49.72, with senior blockchain consultants averaging $71 per hour and top earners reaching $99 per hour (ZipRecruiter, Glassdoor 2025/2026). In the United Kingdom, market research freelancers averaged $61 per hour in 2024 with top-tier researchers averaging $98 per hour (YunoJuno 2024). Entry-level research coordinators average $19 per hour in the United States (Payscale 2026).

- ZipRecruiter Blockchain Consultant Salary January 2026: https://www.ziprecruiter.com/Salaries/Blockchain-Consultant-Salary

- Glassdoor Blockchain Consultant Salary 2025: https://www.glassdoor.com/Salaries/blockchain-consultant-salary-SRCH_KO0,21.htm

- YunoJuno Freelance Rates Report Market Research 2024: https://www.yunojuno.com/freelancer-rates-report/market-research

- Payscale Research Coordinator Hourly Rate 2026: https://www.payscale.com/research/US/Job=Research _Coordinator/Hourly_Rate/6d38cf7c/Entry-Level-Oral-Verbal-Communication

**Individual Compensation Justification**

**Abdulbasit Adigun Abdulrahman — Lead Researcher**

**10,000 ADA (~$2,400 to $2,800 USD)**

**Scope **Research design, instrument development, conduct of all 30 to 44 interviews, evidence baseline documentation, analysis and classification, production of all 16 required deliverables, CPC checkpoint participation, final presentation, public summary. Full 12-week engagement.

**Est. Hours **~160 to 180 hours across full project, averaging 13 to 15 hours per week.

**Effective Rate **~$13 to $17 USD per hour effective rate.

**Market Comparison**

73 to 84% below average US blockchain consultant freelance rate of $49.72 to $71 per hour. Rate reflects existing validation work, community access, and documented starting evidence eliminating costs an external consultant would charge for.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 35

**Yuguda Muhammad — Research Coordinator**

**5,000 ADA (~$1,200 to $1,400 USD)**

**Scope **Respondent mapping and recruitment, scheduling and logistics, structured note-taking, secure data organisation, timeline coordination across all four milestones.

**Est. Hours **~100 to 120 hours across full project, averaging 8 to 10 hours per week.

**Effective Rate **~$10 to $14 USD per hour effective rate.

**Market Comparison**

26 to 47% below US entry-level research coordinator average of $19 per hour. Reflects Lagos-based cost context and ecosystem-contributing nature of engagement.

**Samir Idris — Technical Advisor**

**4,000 ADA (~$960 to $1,120 USD)**

**Scope **Independent technical review of VAL-003 and VAL-006 findings in Milestone 1. Technical review of provider claims in Milestone 3. Participation in Research Design Review and Interim Findings Review.

**Est. Hours **~40 to 50 hours across two defined task windows.

**Effective Rate **~$19 to $28 USD per hour effective rate.

**Market Comparison**

72 to 81% below open market rate of $71 to $99 per hour for a senior blockchain consultant with CPC membership and mainnet shipping credentials across four production protocols. Strongest individual value-for-money position in this budget.

**Milestone-Based Payment Schedule**

Payments are tied to milestone delivery and CPC acceptance of outputs rather than elapsed time alone. This protects the CPC's investment and aligns incentives with research quality.

**Milest one**

**Name Dates Key Outputs Payment on Acceptance**

M1 Foundation and Screening

22 Jun — 10 Jul 2026

Research design, VAL cases, desk research, screening report, access check

6,250 ADA (25%)

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 36

**Milest one**

**Name Dates Key Outputs Payment on Acceptance**

M2 Primary Research 6 Jul — 7 Aug 2026

All interviews complete, initial blocked-demand register, early signal review

6,250 ADA (25%)

M3 Analysis and Draft Deliverables

3 Aug — 4 Sep 2026

All classifications, full draft deliverable set, interim and draft reviews

7,500 ADA (30%)

M4 Final Deliverables and Publication

7—11 Sep 2026

Final report, final presentation, public summary published

5,000 ADA (20%)

Total 25,000 ADA

**Budget Summary**

**Line Item Purpose ADA**

Lead Researcher Research design, interviews, analysis, deliverables 10,000

Research Coordinator Respondent access, logistics, note-taking 5,000

Technical Advisor Technical validation, milestone checkpoints 4,000

Research Operations Provider access, negative-case outreach, tools, consent, communication

4,000

Contingency Unforeseen access or tooling costs — returned if unused 2,000

Total 25,000

**Value for Money Argument**

The total cost of 25,000 ADA represents approximately $5,500 to $6,500 USD for a 12-week, 30 to 44 respondent study producing 16 required deliverables. An equivalent engagement commissioned from an external research firm at mid-market blockchain consultant rates of $50 to $75 per hour would cost approximately $25,000 to $40,000 USD for the lead researcher role alone, with the full external market equivalent ranging from $35,000 to $55,000 USD or approximately 145,000 to 228,000 ADA at current rates.

NexTrium's proposal delivers the same scope at approximately 11 to 17 percent of the external market equivalent cost. The primary value drivers are: (1) existing documented evidence base eliminating preliminary research costs; (2) established community access eliminating cold-outreach costs; (3) Samir Idris's technical review capacity at a rate 72 to 81 percent below open market equivalent for that calibre of expertise; (4) research operations budget explicitly covering provider access and negative-case outreach costs; (5) deliberately narrow scope producing higher-confidence findings.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 37

### SECTION 11: CONFLICTS OF INTEREST DECLARATION
NexTrium Global Innovations Ltd makes the following declarations on behalf of all named team members in accordance with the requirements of RFP 07.

**Abdulbasit Adigun Abdulrahman — Lead Researcher**

Abdulbasit is the founder and director of NexTrium Global Innovations Ltd and the lead contributor to Zivana Protocol. Zivana Protocol is referenced throughout this proposal as a primary evidence case and is the source of the baseline validation findings that form the research's starting evidence set. This constitutes a declared potential conflict of interest.

Management approach: In accordance with CPC clarification guidance received during the submission process, all evidence derived from Zivana Protocol's validation work is treated as applicant-supplied conflicted evidence throughout this research. It is clearly separated from independent evidence, will not by itself establish segment-level demand or value-flow classifications above low confidence, and its confidence level depends on documentation available, CPC inspectability, reproducibility, and triangulation with independent sources. All findings derived from Zivana's architecture will be distinguished from independent builder and operator evidence throughout the research and in all deliverables. Findings that do not support Cardano infrastructure investment, including findings that recommend reject, will be reported without filtering.

Abdulbasit serves as Governance Research Lead at Prisma Protocol. This role does not create a financial interest in any infrastructure providers, bridge protocols, or interoperability pathways assessed in this research.

Abdulbasit has contributed to the broader ecosystem as DEEP Fund Marketing Coordinator and Ecosystem Contributor to ASI Alliance. Neither role creates a financial interest in or governance position over any assessed entity.

Abdulbasit is an active participant in Cardano Intersect. This participation does not create a governance position that would compromise independent research findings.

No financial exposure to bridge providers, interoperability protocols, partner-chain teams, wallet providers, or liquidity providers assessed in this research is declared at the time of submission.

**Yuguda Muhammad — Research Coordinator**

No conflicts of interest are declared at the time of submission. Yuguda Muhammad does not hold governance, advisory, or financial positions in any Cardano ecosystem entity, bridge provider, interoperability protocol, or infrastructure team that would be assessed in this research.

**Samir Idris — Technical Advisor**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 38

Samir is a newly elected member of the Cardano Product Committee through the most recent Intersect election. His CPC membership means he serves on the body that commissions and evaluates this research. This constitutes a declared potential conflict of interest.

Management approach: Consistent with his published Intersect election declaration, Samir does not hold any governance position that would compromise independent decision-making and will disclose any potential conflict and recuse himself where appropriate. Within this research, Samir's role is scoped exclusively to technical validation of specific findings in Milestones 1 and 3 and does not extend to research design, deliverable production, or recommendations to the CPC. His technical review outputs will be clearly attributed and distinguished from the lead researcher's analysis in all deliverables.

Samir has contributed to and shipped products with Minswap, FluidTokens, Metera, and Statera. None of these protocols are bridge providers, interoperability protocols, or infrastructure teams assessed in the value-flow or provider opportunity sections of this research. No financial exposure to any assessed provider or pathway is declared at the time of submission.

**Subcontracting**

No subcontractors are engaged beyond the named team members above. If any subcontracting becomes necessary during the research, it will be disclosed to CPC immediately with full details of roles, responsibilities, costs, and any conflicts.

**General Declaration**

No team member holds ownership or commercial interest in any bridge provider, interoperability protocol, partner chain, wallet provider, or liquidity provider that may be assessed in this research. No team member intends to apply for Cardano ecosystem funding directly connected to the findings of this research in a way that would create a material conflict with the research outputs. All declared conflicts are managed through the controls described above and will be disclosed immediately to the CPC if circumstances change during the research period.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 39

### SECTION 12: ETHICS AND DATA HANDLING STATEMENT
This section consolidates the ethics and data handling approach for this research in accordance with the Submission Pack requirement for a standalone ethics and data handling statement.

**Research Ethics Approach**

This research involves interviews with builders, operators, infrastructure providers, bridge providers, and other commercially active stakeholders. NexTrium applies the following baseline human-subject safeguards to every interview and survey interaction throughout the project. Before each interview, every respondent will be told the purpose of the research, who commissioned it, who the research is for, and how their input may be used. Respondents will be asked explicitly whether their comments are attributable by name, attributable by category only, or fully confidential. No respondent will be recorded without explicit verbal or written consent. Respondents will be given the opportunity to clarify or withdraw attribution status after the interview. NexTrium will not expose respondents to employment, commercial, security, regulatory, or competitive risk through the publication of findings.

**Informed Consent Protocol**

Yuguda Muhammad will manage a consent tracking register throughout the project. Every respondent will be logged with their consent status before their interview. Consent status categories: Named attribution (consented to being identified by name and organisation), Anonymised attribution (consented to views being published but not attributed), Confidential (input used only to inform analysis, not published in any identifiable form), No contact (declined to participate, will not be approached again). No interview will proceed without a documented consent status.

**Anonymisation Approach**

Published outputs will use the minimum level of identification necessary to make findings useful. The Blocked-Demand Case Register will distinguish named, confidential, and anonymised cases explicitly. The Provider and Partner Opportunity Analysis will use category-level descriptions for providers who have not consented to named attribution. The public summary will not contain any information that could identify a confidential respondent through context, combination of details, or process of elimination.

**Data Storage and Security**

All raw interview notes will be stored securely by Yuguda Muhammad in a password-protected environment accessible only to the research team. Raw notes will not be shared outside the research team without explicit respondent consent. Data will be retained for a minimum of two years following project completion to allow CPC inspection if required. After the two-year retention period, data will be deleted or anonymised unless CPC requests extended retention in writing.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 40

**Confidentiality and Publication Boundaries**

Research outputs will be produced in two tiers. The confidential tier covers the full research report and supporting deliverables, accessible to CPC and approved reviewers. The public tier covers the public summary, accessible to the broader ecosystem. The public tier will not contain confidential respondent identities, unreleased technical roadmap details, commercially sensitive provider information, security-sensitive bridge or infrastructure details, or confidential integration plans. If any finding cannot be published in any useful form due to confidentiality constraints, that limitation will be disclosed in the public summary with an explanation of why the finding is withheld.

**Proprietary and Paid Data Handling**

No proprietary datasets are planned for this research. All primary data will be generated through interviews and desk research using publicly available sources. The research operations budget includes contingency for paid expert calls if bridge or provider outreach requires an intermediary introduction. If any proprietary, paid, or non-public data source becomes necessary, NexTrium will immediately disclose to CPC the source, access conditions, whether CPC can inspect the data, whether it can be cited publicly, what limitations apply, and whether it can be retained after project completion.

**Bias Controls and Research Integrity**

The ethics and data handling approach operates in conjunction with the research integrity controls described in Section 9. NexTrium will not wait until the final report to disclose weak respondent access, unsupported demand claims, technical feasibility uncertainty, provider non-responsiveness, or evidence that conflicts with preliminary findings. Material issues will be disclosed at the earliest relevant CPC checkpoint as described in Section 8.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 41

### SECTION 13: DELIVERABLES PLAN
This section provides a consolidated map of all required deliverables, their content requirements, acceptance criteria, milestone schedule, and confidentiality treatment. NexTrium will produce all deliverables as standalone documents unless combination is explicitly noted.

**D1: L2 Barrier Analysis**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**Description **Ranked analysis of what is blocking L2-dependent deployment on Cardano across the African informal economy builder population.

**Content Requirements**

Separates all nine blocker types: technical, commercial, ecosystem, liquidity, UX, tooling, coordination, compliance, and unknown. Each entry includes blocker description, affected use case, blocker type, severity, adoption impact, urgency, evidence source, confidence level, proposed owner or workstream, and recommended action from the full set including reject. Every blocker entry must include a relevance confirmation stating how the blocker directly ties to a specific L2 or interoperability workflow. Applicant-supplied conflicted evidence entries are clearly labelled and separated from independent evidence entries.

**Acceptance Criteria**

Separates technical, commercial, ecosystem, liquidity, UX, coordination, and unknown blockers. Includes evidence source, affected use case, severity, confidence level, and proposed owner. Does not treat all blockers as technical. Ranks barriers with explained impact.

**D2: L2 Demand Map**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**Description **Map of applications and use cases waiting on L2 or interoperability capability across the African informal economy builder population.

**Content Requirements**

Every entry includes all nine required dimensions: application or use-case category, blocked workflow, required L2 capability, deployment condition, expected adoption pathway, indicative scale range, timing assumptions, confidence level, and source basis. Scale estimates as indicative ranges with stated assumptions.

**Acceptance Criteria**

Includes all nine dimensions. Does not list speculative ideas or rely on self-reported demand only. Includes deployment condition and scale logic for every entry.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 42

**D3: Interoperability Requirements Register**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**Description **Ranked register of interoperability features requested by builders, operators, bridge providers, infrastructure teams, and other relevant stakeholders.

**Content Requirements**

Every entry includes all eight required dimensions: requested feature, user or operator type, chain or corridor or pathway, frequency, urgency, blocker status, adoption consequence, evidence source, and confidence level. Distinguishes must-have from nice-to-have.

**Acceptance Criteria**

Classifies by user or operator type, chain or corridor, frequency, urgency, blocker status, adoption consequence, evidence source, and confidence. Does not produce a generic feature wish list.

**D4: Interoperability Value-Flow Assessment**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**Description **Classification of priority cross-chain pathways by Cardano-side value and dependency risk using the five-category RFP framework.

**Content Requirements**

Every pathway classification states all six required elements: expected inflows (users, liquidity, applications, transactions, partner access), potential outflows, retention mechanism, dependency risk, evidence, and confidence. Uses five agreed categories. Bridge volume data used only where source, destination, and retention analysis accompanies it. All pathway classifications derived from NexTrium applicant validation work are labelled as applicant-supplied conflicted evidence and separated from independent evidence throughout. No applicant-supplied finding is used to establish a confidence level above low without independent triangulation.

**Acceptance Criteria**

Assesses all inflow and outflow dimensions. Does not treat every connection as positive. Does not ignore outflow risk. Includes source, destination, and retention logic.

**D5: Provider and Partner Opportunity Analysis**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 43

**Description **Assessment of bridge, interoperability, partner-chain, wallet, and infrastructure providers relevant to Cardano's African emerging market opportunity.

**Content Requirements**

Every provider entry includes all nine Appendix F dimensions: provider or partner type, current Cardano status, integration blocker, commercial incentive, technical effort, demand evidence, mutual benefit, risk, and recommended action. Supported by peer ecosystem benchmarking.

**Acceptance Criteria**

Includes all nine dimensions. Does not list providers without decision logic. Does not ignore why providers have not prioritised Cardano.

**D6: Blocked-Demand Case Register**

**Milestone: Initial M2, Final M4 | Confidentiality: Summary public**

**Description **Documented cases where specific applications, workflows, or operators are waiting on L2 or interoperability capability.

**Content Requirements**

Minimum 8 to 15 documented cases. VAL-003 and VAL-006 serve as Cases 1 and 2 at low confidence as applicant-supplied conflicted evidence, upgradeable following Samir Idris technical review and independent builder triangulation. Each case distinguishes named, confidential, and anonymised evidence. Each case includes blocker, deployment decision pending, evidence source, and confidence level. Every case must pass the relevant L2 or interoperability workflow test confirming the blocker directly ties to a named L2 or interoperability use case.

**Acceptance Criteria**

Applicant-justified number of cases. Distinguishes named, confidential, and anonymised evidence. Includes blocker, decision pending, source, and confidence. Does not use vague builders say claims.

**D7: Negative-Case and Non-Cardano Evidence Summary**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**Description **Evidence from stalled deployments, rejected integrations, competitor chain choices, and non-Cardano operator perspectives.

**Content Requirements**

Includes negative cases, non-Cardano comparisons, and stalled or rejected pathways. For each case, explains what Cardano should learn or avoid. Does not filter for positive outcomes.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 44

**Acceptance Criteria**

Includes negative cases, non-Cardano comparisons, or stalled pathways. Explains what Cardano should learn or avoid. Does not rely only on positive Cardano cases.

**D8: Investment Sequencing Recommendation**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**Description **Recommended order of L2 and interoperability actions converting research findings into funding and coordination decisions.

**Content Requirements**

Ranks all recommended actions by validated demand, impact, urgency, dependency, cost driver, owner or workstream, confidence, expected Cardano-side value, and action type. Uses full action set including reject. Framed as evidence-based sequencing recommendations, not roadmap prescriptions.

**Acceptance Criteria**

Ranks by all required dimensions. Does not produce broad recommendations without sequencing. Connects all actions to evidence and decision gates.

**D9: Evidence Threshold Framework**

**Milestone: Draft M3, Final M4 | Confidentiality: Fully public**

**Description **Reusable standard for assessing future L2 and interoperability grant, partnership, and roadmap proposals.

**Content Requirements**

Defines minimum evidence required across five dimensions for each proposal type: demand evidence, blocker severity, value-flow benefit, adoption pathway, and measurable outcomes. Scoped to L2 and interoperability proposals specifically.

**Acceptance Criteria**

Defines minimum evidence for demand, blocker severity, value-flow benefit, adoption pathway, and measurable outcomes. Helps reviewers distinguish strong from weak proposals.

**D10: Technical and Commercial Blocker Taxonomy**

**Milestone: Compiled progressively M1 through M3, Final M4 | Confidentiality: Fully public**

**Description **Reusable classification system for L2 and interoperability blockers ensuring findings are routed to the correct owner or workstream.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 45

**Content Requirements**

Standalone reference document covering all nine blocker types with definitions, distinguishing characteristics, and routing guidance. Maps each blocker type to its corresponding action category and responsible workstream.

**Acceptance Criteria**

Provides a reusable classification system. Ensures blockers are routed correctly. Distinguishes ecosystem blockers from tooling blockers explicitly.

**D11: Research Methodology Appendix**

**Milestone: Compiled progressively M1 through M3, Final M4 | Confidentiality: Summary public**

**Description **Full methodology documentation making all research findings auditable by CPC and ecosystem readers.

**Content Requirements**

Covers all six required components: respondent categories and recruitment method, interview and survey instruments, evidence limits, proprietary data restrictions, confidence rubric, and limitations including scope boundaries and access constraints.

**Acceptance Criteria**

Lists respondent categories, recruitment method, instruments, evidence limits, proprietary data restrictions, and confidence rubric. Does not hide methods. Explains limitations and respondent bias.

**D12: Cross-RFP Handoff Memo**

**Milestone: Compiled progressively M2 through M3, Final M4 | Confidentiality: Fully public**

**Description **Routing document mapping findings that touch adjacent RFPs or workstreams to their correct destinations.

**Content Requirements**

Maps dependencies to RFP 2 (stablecoin liquidity), RFP 3 (use-case positioning), RFP 5 (enterprise and RWA readiness), RFP 6 (government and emerging market entry), RFP 8 (delivery partners), RFP 09 (AI commercial positioning), DevX workstream, wallets workstream, liquidity workstream, and technical roadmap workstream.

**Acceptance Criteria**

Maps dependencies to all named adjacent RFPs and workstreams. Does not absorb adjacent RFPs into scope. Identifies all relevant dependencies.

**D13: Executive Decision Memo**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 46

**Description **Short decision-ready summary supporting fast CPC review and prioritisation.

**Content Requirements**

States top findings, recommended investment sequence, investment implications, unresolved questions, and reject or deprioritisation findings with stated rationale. Maximum five pages.

**Acceptance Criteria**

States top findings, recommended sequence, investment implications, unresolved questions, and reject or deprioritisation findings. Does not summarise activity without stating decisions.

**D14: Final Research Report**

**Milestone: Draft M3, Final M4 | Confidentiality: Confidential**

**Description **Complete research report providing the full evidence base and recommendations for CPC and approved stakeholders.

**Content Requirements**

Answers all eleven decision gates with traceable evidence. Includes full methodology, all findings with confidence levels, all limitations and evidence caveats, all required deliverables, and all recommended actions with evidence basis.

**Acceptance Criteria**

Answers all decision gates. Includes methods, findings, confidence levels, limitations, and recommended actions. Does not produce long narrative without decision answers.

**D15: Final Presentation**

**Milestone: M4 — 8 September 2026 | Confidentiality: Confidential**

**Description **Presentation of research findings and recommended actions for CPC review, questioning, and alignment.

**Content Requirements**

Covers all major findings with confidence levels, limitations acknowledged, decisions enabled, and recommended actions. Delivered live to CPC on 8 September 2026.

**Acceptance Criteria**

Presents findings, confidence levels, limitations, decisions enabled, and recommended actions. Supports review and questioning.

**D16: Public Summary**

**Milestone: M4 — published post-CPC approval, 10 September 2026 | Confidentiality: Fully public**

**Description **Non-confidential summary suitable for publication to the broader Cardano ecosystem.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 47

**Content Requirements**

Includes methodology overview, respondent category summary, high-level demand findings, high-level L2 blocker findings, high-level interoperability requirements, publishable value-flow themes, recommended investment sequencing where publishable, and limitations and evidence caveats. Excludes all confidential information.

**Acceptance Criteria**

Includes methodology overview, publishable findings, high-level recommendations, caveats, and confidentiality limits. Not too vague to be useful. Does not expose confidential details.

**Deliverables Summary Table**

**No. Deliverable Milestone Confidentiality**

D1 L2 Barrier Analysis Draft M3, Final M4 Summary public

D2 L2 Demand Map Draft M3, Final M4 Summary public

D3 Interoperability Requirements Register Draft M3, Final M4 Summary public

D4 Interoperability Value-Flow Assessment Draft M3, Final M4 Summary public

D5 Provider and Partner Opportunity Analysis Draft M3, Final M4 Summary public

D6 Blocked-Demand Case Register Initial M2, Final M4 Summary public

D7 Negative-Case and Non-Cardano Evidence Summary

Draft M3, Final M4 Summary public

D8 Investment Sequencing Recommendation Draft M3, Final M4 Summary public

D9 Evidence Threshold Framework Draft M3, Final M4 Fully public

D10 Technical and Commercial Blocker Taxonomy Progressive M1-M3, Final M4

Fully public

D11 Research Methodology Appendix Progressive M1-M3, Final M4

Summary public

D12 Cross-RFP Handoff Memo Progressive M2-M3, Final M4

Fully public

D13 Executive Decision Memo Draft M3, Final M4 Summary public

D14 Final Research Report Draft M3, Final M4 Confidential

D15 Final Presentation M4 — 8 Sep 2026 Confidential

D16 Public Summary M4 — post-CPC approval

Fully public

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 48

### SECTION 14: OPTIONAL STRETCH SCOPE
The following stretch scope items are offered as optional additions to the core research commitment. They are priced separately from the core 25,000 ADA budget in accordance with the RFP's guidance that optional methods and stretch work should be separated from core scope and budget. Each item adds decision value beyond the core deliverables and can be commissioned independently or in combination. The CPC may select any combination of stretch items at the time of award.

**S1: Deeper Peer Ecosystem Benchmarking**

**Price: 3,000 ADA**

**Description **Extended comparative analysis of how Celo, Stellar, Polygon, and Lisk have converted L2 and interoperability infrastructure into adoption in African and emerging markets. The core scope includes benchmarking sufficient to support provider and partner recommendations. This stretch item extends that benchmarking to a wider set of ecosystems and deeper analysis of specific mechanisms, incentives, and sequencing decisions.

**Decision Value **Enables the CPC to make more informed comparisons between Cardano's current trajectory and approaches taken by ecosystems that have successfully attracted African market builders. Prevents Cardano from repeating known failures or overlooking proven approaches.

**Additional Deliverable**

Peer Ecosystem Benchmarking Report as a standalone supplement to the Provider and Partner Opportunity Analysis.

**S2: Deeper Analysis of Specific Bridge Corridors or Partner-Chain Candidates**

**Price: 2,500 ADA**

**Description **Extended deep-dive analysis of two to three specific bridge corridors or partner-chain candidates identified during screening as highest priority for the African informal economy use case. Adds detailed provider engagement, technical feasibility assessment, commercial incentive modelling, and integration roadmap analysis.

**Decision Value **Converts high-level value-flow classifications into actionable partnership or integration recommendations with sufficient detail for the CPC to initiate BD conversations or technical collaboration discussions immediately following the research.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 49

**Additional Deliverable**

Bridge Corridor and Partner-Chain Deep-Dive Analysis as a standalone supplement to the Provider and Partner Opportunity Analysis.

**S3: Additional Non-Cardano and Negative-Case Interviews**

**Price: 2,000 ADA**

**Description **Expansion of the Category 4 respondent range from the core commitment of 4 to 6 interviews to 10 to 12 interviews. Additional respondents cover a wider geographic spread including builders in Nairobi, Accra, and Cape Town, and a broader range of alternative chains including Sui, Aptos, and Cosmos IBC ecosystem builders active in African markets.

**Decision Value **Strengthens the external validation base and reduces the risk that negative-case findings reflect Lagos-specific conditions rather than Africa-wide patterns. This stretch item is particularly valuable for upgrading applicant-supplied conflicted evidence classifications from low to medium confidence where multiple independent respondents corroborate the same capability gap or value-flow finding. Increases confidence levels for negative-case classifications from medium to high where multiple independent respondents corroborate the same finding.

**Additional Deliverable**

Extended Negative-Case Evidence Supplement integrated into the Negative-Case and Non-Cardano Evidence Summary.

**S4: Wallet and UX Dependency Assessment**

**Price: 2,500 ADA**

**Description **Dedicated assessment of where wallet friction and UX dependency directly block interoperability adoption in the African informal economy context. Adds a structured wallet UX assessment covering the gap between current Cardano wallet capabilities and what African informal economy users require, including feature-phone compatibility, USSD access, low-data UX requirements, and local language support.

**Decision Value **Addresses the RFP's explicit nice-to-have of wallet and UX dependency assessment where it directly affects interoperability adoption. Provides the CPC with actionable wallet-specific findings that can be routed to the wallets workstream with sufficient detail for immediate follow-up.

**Additional Deliverable**

Wallet and UX Dependency Assessment as a standalone supplement to the Interoperability Requirements Register.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 50

**S5: Expanded Technical Feasibility Review**

**Price: 2,000 ADA**

**Description **Extension of Samir Idris's technical review scope beyond the core commitment of VAL-003 and VAL-006 findings to cover a broader set of infrastructure provider claims identified during primary research, including technical feasibility review of up to five additional provider or pathway claims.

**Decision Value **Lifts the confidence level of additional provider-side findings from medium to high where external technical validation is possible. Particularly valuable if the screening phase identifies technically complex bridge corridor or partner-chain candidates whose claims require independent technical scrutiny.

**Additional Deliverable**

Extended Technical Review Notes integrated into the Research Methodology Appendix and referenced in the relevant deliverables.

**S6: Public Workshop or Ecosystem Briefing**

**Price: 1,500 ADA**

**Description **One structured public session presenting the research findings to the African Cardano builder community following final CPC approval of the public summary. Hosted online and open to builders, operators, and community members across the African ecosystem.

**Decision Value **Extends the reach of the research findings beyond the CPC to the builder community most likely to act on them. Creates a direct feedback loop between the research outputs and the population the research was designed to serve.

**Additional Deliverable**

Public Workshop Recording and Summary Note published alongside the Public Summary.

**S7: Reusable Annual Refresh Model**

**Price: 3,000 ADA**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 51

**Description **A lightweight methodology and template package enabling the CPC or a future research vendor to conduct an annual refresh of the L2 and interoperability demand and value-flow assessment without commissioning a full research engagement from scratch. Includes a streamlined interview guide, updated screening criteria checklist, value-flow reclassification template, evidence confidence update protocol, and changelog format.

**Decision Value **The only stretch item that creates compounding value beyond this research cycle. Consistent with the CPC's Strategy 2030 orientation, an annual refresh model ensures that demand map, barrier analysis, and value-flow classifications remain current as Cardano's infrastructure evolves. Reduces the cost of future research cycles.

**Additional Deliverable**

Annual Refresh Methodology and Template Package as a standalone document delivered alongside the Final Research Report.

**Stretch Scope Summary**

**Item Description ADA**

S1 Deeper peer ecosystem benchmarking 3,000

S2 Deeper bridge corridor and partner-chain analysis 2,500

S3 Additional non-Cardano and negative-case interviews 2,000

S4 Wallet and UX dependency assessment 2,500

S5 Expanded technical feasibility review 2,000

S6 Public workshop or ecosystem briefing 1,500

S7 Reusable annual refresh model 3,000

Total optional stretch

16,500

*All stretch items are optional additions commissioned entirely at CPC discretion. The core research commitment of 25,000 ADA and all sixteen required deliverables remain fixed and unconditional regardless of which stretch items, if any, are selected. If all stretch items are commissioned, the total project budget would be 41,500 ADA, representing approximately 11.1 percent of the total RFP portfolio budget of 373,000 ADA.*

### TABLE OF CONTENTS
**Section 1 **Cover Letter

**Section 2 **Understanding of the Brief

**Section 3 **Proposed Methodology

**Section 4 **Decision Gate Mapping

**Section 5 **Stakeholder Access Plan

**Section 6 **Value-Flow Assessment Plan

**Section 7 **Team Qualifications

**Section 8 **Workplan and Timeline

**Section 9 **Risk and Bias Mitigation

**Section 10 **Budget Breakdown

**Section 11 **Conflicts of Interest Declaration

**Section 12 **Ethics and Data Handling Statement

**Section 13 **Deliverables Plan

**Section 14 **Optional Stretch Scope

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 3

### SECTION 1: COVER LETTER
**To: Cardano Product Committee / Intersect**

**From: NexTrium Global Innovations Ltd**

**Re: Product Research Grants — RFP 07: L2 Adoption and Interoperability Demand Study**

**Date: May 2026**

The Cardano Product Committee has correctly identified that the ecosystem lacks a decision-ready map of what is actually blocking L2 deployment and which interoperability pathways create durable Cardano-side value. NexTrium Global Innovations Ltd submits this proposal to close that evidence gap from the perspective of builders who are operating within it.

NexTrium is the development entity behind Zivana Protocol, an open Layer 2 trust infrastructure protocol being built on Cardano and Midnight for the African informal economy. Over the past several months, we have validated five protocol primitives against Cardano's current infrastructure stack, covering identity, distribution, trust, oracle, and intelligence layers. That work has produced precise technical documentation of where deployment proceeds, where it stalls, and where value may route off Cardano due to missing last-mile capability. This validation work is not background context for this proposal. It is the first evidence deposit the research will build from.

Our differentiated contribution to RFP 07 is threefold. First, we bring documented, reproducible builder evidence of L2 and interoperability blockers grounded in engineering-level diagnostics with named failure modes and workaround decisions already made during active protocol validation. Second, we operate within the African informal economy builder ecosystem and have direct access to a demand segment that is structurally underserved and almost entirely absent from existing Cardano infrastructure research. Third, our own architecture has already forced us to answer the question this RFP frames as its hardest: when Cardano's infrastructure is insufficient, does value stay in the ecosystem or leave it? During validation of Zivana's distribution primitive, the team made a documented architectural decision to route covenant distributions to Celo MiniPay because Cardano currently lacks an equivalent phone-number-based stablecoin distribution rail. Celo is an Ethereum Layer 2 protocol. This means the absence of a comparable last-mile distribution capability on Cardano is not a neutral gap; it represents a documented architectural decision that, if replicated across the broader builder population, would constitute an active value-leakage pathway. This will be tested and triangulated through primary research as applicant-supplied conflicted evidence, clearly separated from independent operator and provider findings.

This proposal scopes the research tightly around what we can validate with high confidence: African emerging market builders and operators, documented L2 blockers across the Cardano infrastructure stack, and a value-flow assessment grounded in real deployment

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 4

decisions rather than theoretical corridors. We are not proposing to cover every bridge provider or every global L2 pathway. We are proposing to produce the most credible, evidence-dense, and decision-ready findings available from this demand segment, delivered on time, within budget, and with full methodology transparency.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 5

### SECTION 2: UNDERSTANDING OF THE BRIEF
The African informal economy accounts for between 30 and 40 percent of the continent's GDP, employs 83 percent of its workforce, and operates almost entirely outside formal financial infrastructure. In sub-Saharan Africa, roughly 90 percent of consumer spending is still conducted in cash. Globally, 70 percent of micro, small, and medium enterprises in emerging markets lack adequate financing to grow, with the financing gap for informal MSMEs estimated at $2.9 trillion by the International Finance Corporation. These figures establish the scale of the economic context in which this research is situated. They are not presented as evidence of Cardano adoption demand. Whether this population represents a viable Cardano adoption opportunity, and what infrastructure would need to exist for that to be the case, is precisely what this research is designed to find out.

Zivana Protocol is being built to address that gap directly. It is an open Layer 2 trust infrastructure protocol on Cardano and Midnight that makes economic capability visible, verifiable, and financeable for informal economy participants without requiring them to become formal first. Its five core primitives, covering identity, trust scoring, covenant execution, distribution, and market intelligence, are designed to function without a bank account, a registered business, a smartphone, or prior blockchain experience. Cardano is the intended settlement layer. Midnight is being validated as the privacy layer. Hyperledger Identus is the intended identity infrastructure, currently blocked by a documented DX failure under investigation. The protocol is currently in Phase 0: Foundation Verification, proving every stack component works before any protocol logic is built on top.

That verification work is directly relevant to what this RFP is asking. NexTrium's VAL-003 validation documented a reproducible technical failure in the Hyperledger Identus Cloud Agent deployment path, specifically an undocumented JVM initialisation dependency that prevents the identity primitive from running locally, despite correct schema injection and network configuration. Our VAL-006 validation revealed that Cardano currently lacks an equivalent to Celo MiniPay's phone-number-based stablecoin distribution rail. Celo is an Ethereum Layer 2 protocol. During validation of Zivana's distribution primitive, the team made a documented architectural decision that covenant distributions would need to route to Celo MiniPay because Cardano does not currently provide this capability. These are specific, reproducible, documented findings from an active builder working on Cardano, not general observations about what the ecosystem might need. These findings are treated throughout this proposal as applicant-supplied conflicted evidence, clearly separated from independent operator, provider, and external evidence, and will not be used to establish segment-level demand or high-confidence value-flow classifications without independent triangulation.

The CPC is asking three connected questions that NexTrium understands as the core of this brief. First, which applications are genuinely blocked by missing L2 capability, and what specifically would need to change for deployment to proceed? Second, where blockers exist, are they engineering problems, documentation gaps, tooling failures, or commercial uncertainties, and who is the right owner for each type? Third, which interoperability pathways would bring users, liquidity, and applications into Cardano, and which would accelerate the

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 6

flow of value toward larger ecosystems such as Ethereum?

This proposal does not attempt to answer those questions for the entire global ecosystem. The scope is the African informal economy builder population, a segment with documented demand, direct builder access, and almost no representation in existing Cardano infrastructure research. The $2.9 trillion global financing gap for informal MSMEs, the 83 percent informal employment rate across Africa, and the near-total reliance on cash transactions in sub-Saharan Africa provide contextual framing for the scale of the economic context in which this research is situated. Whether Cardano's current and planned infrastructure is positioned to serve that opportunity is an open question. This research will assess the degree to which infrastructure gaps are blocking deployment within the African informal economy builder population studied, and whether those gaps are representative of broader emerging market L2 and interoperability demand.

**Sources:**

- IFC MSME Finance: https://www.ifc.org/en/what-we-do/sector-expertise/financial-institutions/msme-finance

- UN ECA / North Africa Post (2026): https://northafricapost.com/96624-africas-informal-economy-employs-83-of-workforce-in-2024-un-data.html

- World Economic Forum (February 2026): https://www.weforum.org/stories/2026/02/how-technology-can-help-bank-africa-s-informal-economy/

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 7

### SECTION 3: PROPOSED METHODOLOGY
This research follows a screening-first, mixed-method design. The approach moves from documented internal evidence through a structured screening phase into targeted primary research with builders, operators, and infrastructure providers across the African ecosystem. Desk research alone is not sufficient for this RFP and this proposal does not rely on it as a primary evidence source.

**Phase 1: Evidence Baseline and Desk Research (Weeks 1 to 2)**

The research begins with two parallel workstreams.

The first is the internal evidence baseline. The Zivana Protocol validation stack, spanning VAL-001 through VAL-006, provides the first documented evidence layer. Each validation represents a specific infrastructure test against Cardano's current stack with reproducible outcomes.

- VAL-001 (Aiken Distribution Validator): https://github.com/zivana-labs/zivana-validation/tree/main/aiken-stub

- VAL-002 (Midnight Proof of Threshold): https://github.com/zivana-labs/zivana-validation/tree/main/midnight-threshold

- VAL-003 (Identus Setup): https://github.com/zivana-labs/zivana-validation/tree/main/identus-setup

- VAL-004 (Orcfax Schema): https://github.com/zivana-labs/zivana-validation/tree/main/orcfax-schema

- VAL-005 (Fetch.ai uAgent): https://github.com/zivana-labs/zivana-validation/tree/main/fetch-agent

- VAL-006 (Celo MiniPay): https://github.com/zivana-labs/zivana-validation/tree/main/celo-minipay

- Full Validation Repository: https://github.com/zivana-labs/zivana-validation

- Zivana Labs GitHub Organisation: https://github.com/zivana-labs

- VAL-003 documents a named technical and DX blocker in the Hyperledger Identus Cloud Agent deployment path. This finding will be documented using the Appendix B barrier taxonomy and routed to the existing developer tooling workstream via the Cross-RFP Handoff Memo. It will not be expanded into a developer tooling research recommendation within this scope. VAL-006 documents a named applicant-supplied architectural decision made during validation: that covenant distributions would need to route to Celo MiniPay, an Ethereum Layer 2, because Cardano currently lacks an equivalent last-mile payment capability. VAL-001 confirms Cardano's eUTxO settlement layer via Aiken functions correctly for the distribution use case. VAL-002 confirms Midnight's ZK proof infrastructure functions on devnet for privacy-preserving trust scoring. VAL-004 and VAL-005 confirm oracle attestation via Orcfax and agent-based intelligence via Fetch.ai are functional at the prototype level. All six validation cases are treated as applicant-supplied conflicted evidence throughout this research, clearly separated from independent builder, operator, provider, and external evidence in all analysis and deliverables, and will not be used to establish segment-level demand or value-flow classifications above low confidence without independent triangulation.

These six validation cases form the baseline evidence set. Each will be documented using the Appendix B barrier analysis template and Appendix C demand map template before any external research begins. Samir Idris will conduct an independent technical review of the VAL-003 and VAL-006 findings to establish an externally validated confidence level for the

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 8

two most critical cases before fieldwork begins.

The second workstream is desk research. Desk research will establish the current L2 and interoperability landscape relevant to the African builder context. This covers public documentation and roadmaps from Cardano L2, partner-chain, bridge, wallet, and interoperability projects; developer documentation and integration friction evidence from Identus, Midnight, Orcfax, and bridge providers; bridge and provider integration requirements documentation; ecosystem grant and funding proposal history from Cardano Catalyst and Intersect where available and relevant; and publicly available on-chain transaction, liquidity, bridge, and wallet data where meaningful. On-chain and product data will be used only where it validates demand or activity directly relevant to the decision gates. Any limitations in on-chain data coverage will be stated explicitly. Proprietary datasets are not planned. The research operations budget includes contingency for paid expert calls if bridge or provider access requires it.

Peer ecosystem benchmarking will be conducted as a core activity where it supports provider and partner recommendations. Because this proposal includes a Provider and Partner Opportunity Analysis as a required deliverable, the conditional benchmarking requirement applies. Benchmarking will focus on how peer ecosystems including Celo, Stellar, and Polygon convert L2 and interoperability into adoption in African and emerging markets. Deeper benchmarking across a wider set of ecosystems is available as optional stretch scope in Section 14.

**Phase 2: Screening (Weeks 2 to 3)**

Before any deep-dive interviews, the research team will screen candidate use cases, interoperability pathways, and potential respondents against the following criteria: claimed blocker, affected application or workflow, current workaround, evidence of demand, expected Cardano-side value, dependency risk, respondent access, decision value of deeper research, and relevance to Cardano 2030 adoption goals.

The screening phase will produce a shortlist of use cases and pathways that justify primary research depth, and a documented rationale for exclusions. This prevents the research from expanding into a general ecosystem survey and keeps every interview focused on answerable decision gates.

Interoperability pathways screened will include all pathway types the RFP specifies: bridge corridors, cross-chain messaging paths, partner-chain integrations, wallet and user-flow integrations, liquidity routing paths, asset transfer mechanisms, identity and data portability mechanisms, and other cross-chain mechanisms identified during desk research. Wallet pathways and messaging pathways are explicitly included in the screening scope alongside bridge and partner-chain pathways.

Yuguda Muhammad will lead respondent mapping and recruitment during this phase, drawing on NexTrium's existing networks across the African Cardano ecosystem.

**Phase 3: Primary Research (Weeks 3 to 7)**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 9

Primary research is conducted across four respondent categories detailed in Section 5. The total target interview range is 30 to 44 respondents. This comprises 15 to 20 builder and operator interviews in Category 1, 6 to 10 infrastructure and tooling provider interviews in Category 2, 5 to 8 bridge and interoperability provider interviews in Category 3, and 4 to 6 non-Cardano and negative-case interviews in Category 4.

All interviews will be conducted with informed consent, clear disclosure of research purpose and audience, and documented anonymisation choices. Raw notes will be stored securely and will not be published. Findings will distinguish named evidence, confidential evidence, and anonymised themes throughout.

The research will test, refine, or reject the following seven core research hypotheses: (1) Some Cardano applications are genuinely blocked by missing L2 capability. (2) L2 demand is not uniform across use cases. (3) Some apparent L2 blockers are actually non-L2 blockers caused by liquidity, wallets, bridge or provider access, tooling, commercial uncertainty, compliance, partner access, or user demand. (4) Interoperability demand is feature-specific, covering asset bridging, message passing, liquidity routing, partner-chain integration, wallet UX, identity and data portability, and settlement interoperability. (5) Interoperability pathways differ in Cardano-side value. (6) Bridge and interoperability providers have identifiable reasons for not prioritising Cardano. (7) A reusable evidence standard can improve future funding decisions.

**Phase 4: Analysis and Classification (Weeks 7 to 9)**

Interview findings will be analysed against the RFP's decision gates. Before any blocker is recorded in the L2 Barrier Analysis, it must pass a relevance test confirming it directly blocks a specific L2 or interoperability workflow. General infrastructure complaints or ecosystem observations that do not tie to a named L2 or interoperability use case will not be classified as L2 blockers and will be routed to the appropriate adjacent workstream via the Cross-RFP Handoff Memo. Each blocker that passes the relevance test will be classified using the Appendix B taxonomy across eight dimensions: type, severity, adoption impact, urgency, owner or workstream, evidence confidence, affected use case, and evidence source. Blocker types covered are technical, commercial, ecosystem, liquidity, UX, tooling, coordination, compliance, and unknown. Ecosystem blockers are distinct from tooling blockers and include missing wallet support, insufficient developer community presence, and weak business development coverage.

Each blocker will be assigned a recommended action from the following set: fund engineering, improve documentation, pursue wallet support, establish bridge or provider partnerships, coordinate liquidity, provide commercial incentives, activate builders, or reject.

All demand estimates will be presented as indicative ranges with stated assumptions and confidence ratings. The research will not produce precise market sizing or adoption forecasts where the evidence does not support that precision. Demand map entries will include all nine required dimensions from the Appendix C template. Interoperability requirements register entries will include all eight required dimensions from the Appendix D template including adoption consequence.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 10

Each interoperability pathway classification will systematically state all six required value-flow elements: expected inflows into Cardano covering users, liquidity, applications, transactions, and partner access; potential outflows; retention mechanism or Cardano-side benefit; dependency risk; evidence supporting the classification; and confidence level.

Major findings will be triangulated where feasible using more than one evidence type. Bridge volume data will only be used where source, destination, and retention analysis accompanies it.

**Phase 5: Deliverables and Reporting (Weeks 9 to 12)**

All required deliverables will be produced in this phase as detailed in Section 13. Liquidity findings will be classified as blockers and routed to the appropriate adjacent workstream via the Cross-RFP Handoff Memo. Liquidity incentive design is outside the scope of this research. The Evidence Threshold Framework is scoped to evidence standards for L2 and interoperability proposals specifically and will not extend into broader ecosystem funding mechanism design.

The public summary will be written to be useful to builders, funders, and ecosystem teams without exposing confidential respondent information, unreleased roadmap details, or commercially sensitive provider data.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 11

### SECTION 4: DECISION GATE MAPPING
The RFP requires that every method and deliverable maps directly to its decision gates. The following maps how NexTrium's methodology answers each gate, what evidence type is used, and which deliverable carries the finding.

**Decision Gate **Gate 1: Which applications or use cases are actually blocked by missing L2 capability?

**Method **Builder and operator interviews cross-referenced against VAL-001 through VAL-006 baseline evidence. Findings triangulated across at least two evidence types.

**Evidence Type **Named application evidence, deployment blocker documentation, workaround analysis, internal validation cases with external technical review.

**Deliverable **Blocked-Demand Case Register, L2 Demand Map.

**Starting Evidence**

VAL-003 Identus failure and VAL-006 Celo MiniPay architectural decision serve as applicant-supplied conflicted starting evidence, clearly separated from independent demand evidence throughout the research. Minimum 8 to 15 documented cases committed across named, confidential, and anonymised categories.

**Decision Gate **Gate 2: What type of L2 capability would unlock the most immediate adoption value?

**Method **Ranked requirements across throughput, latency, cost, privacy, state management, composability, developer tooling, UX, settlement, and integration burden.

**Evidence Type **Requirements register from operator interviews cross-referenced against internal validation and infrastructure provider interviews.

**Deliverable **Interoperability Requirements Register, L2 Barrier Analysis.

**Starting Evidence**

VAL-002 Midnight ZK privacy functional. VAL-003 Identus DX blocked. VAL-001 Aiken eUTxO works.

**Decision Gate **Gate 3: Which L2 blockers are technical, commercial, ecosystem, or coordination problems?

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 12

**Method **Barrier classification using full Appendix B taxonomy across eight dimensions. Action categories: fund engineering, improve documentation, pursue wallet support, establish bridge or provider partnerships, coordinate liquidity, provide commercial incentives, activate builders, or reject.

**Evidence Type **Builder interviews, infrastructure provider interviews, internal validation diagnostics, technical review by Samir Idris.

**Deliverable **L2 Barrier Analysis, Technical and Commercial Blocker Taxonomy.

**Starting Evidence**

VAL-003: technical plus DX, action improve documentation and coordination. VAL-006: missing ecosystem capability, action fund engineering or partner.

**Decision Gate **Gate 4: Which applications waiting on L2 represent meaningful demand at scale?

**Method **Demand mapping with all nine required dimensions including deployment condition, expected adoption pathway, and timing assumptions. Scale estimates as indicative ranges with stated assumptions.

**Evidence Type **Builder interviews, on-chain data where available with stated limitations, non-Cardano comparisons, IFC and WEF data as contextual framing only.

**Deliverable **L2 Demand Map.

**Starting Evidence**

Zivana Sovela application and Balogun Market operator network as baseline demand cases.

**Decision Gate **Gate 5: What interoperability features do builders and operators actually need?

**Method **Requirements register across all eight dimensions including adoption consequence. Feature types tested: asset bridging, message passing, liquidity routing, partner-chain integration, wallet UX, identity and data portability, settlement interoperability.

**Evidence Type **Operator interviews, bridge and provider interviews, internal validation findings from VAL-005 and VAL-006.

**Deliverable **Interoperability Requirements Register.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 13

**Starting Evidence**

VAL-006: phone-number-based stablecoin rail needed. VAL-005: Fetch.ai intelligence layer functional.

**Decision Gate **Gate 6: Which interoperability pathways are net-positive for Cardano?

**Method **Value-flow assessment using five-category framework. All six elements stated for every pathway: expected inflows (users, liquidity, applications, transactions, partner access), potential outflows, retention mechanism, dependency risk, evidence, and confidence. Classifications are demand assessments, not architecture recommendations.

**Evidence Type **Provider interviews, builder interviews, internal validation findings, negative-case respondent data.

**Deliverable **Interoperability Value-Flow Assessment.

**Starting Evidence**

Midnight: value-accretive (low confidence, applicant-supplied). Orcfax: mutual-value (low confidence, applicant-supplied). Fetch.ai: neutral-access (low confidence, applicant-supplied). Celo MiniPay: dependency-risk to value-leakage risk (low confidence, applicant-supplied conflicted evidence, pending triangulation with independent builders, providers, public data, or negative-case evidence). Identus: pending Phase 1 technical review. All pre-classifications are applicant-supplied conflicted evidence, clearly separated from independent evidence throughout.

**Decision Gate **Gate 7: Which interoperability pathways create asymmetric dependency or value-leakage risk?

**Method **Analysis of value direction across each pathway. Bridge volume data used only where source, destination, and retention analysis accompanies it.

**Evidence Type **Internal validation findings, provider interviews, non-Cardano builder interviews, on-chain data with stated limitations.

**Deliverable **Interoperability Value-Flow Assessment, Negative-Case and Non-Cardano Evidence Summary.

**Starting Evidence**

NexTrium's VAL-006 architectural decision represents applicant-supplied conflicted evidence of a potential value-leakage pathway. This will be tested through primary research with independent builders and providers before any confirmed classification is assigned.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 14

**Decision Gate **Gate 8: Which bridge, partner-chain, or cross-chain partners should Cardano prioritise?

**Method **Provider and partner opportunity analysis across all nine Appendix F dimensions including commercial incentive and technical effort. Recommended actions: fund now, coordinate, partner, monitor, defer, or reject. Supported by peer ecosystem benchmarking.

**Evidence Type **Provider interviews, builder interviews, internal validation findings, public documentation review.

**Deliverable **Provider and Partner Opportunity Analysis.

**Starting Evidence**

Named provider shortlist in Section 5 including Wanchain, Milkomeda, Rosen Bridge, Celo, XDAO.

**Decision Gate **Gate 9: What is preventing bridge and interoperability providers from prioritising Cardano?

**Method **Direct provider interviews testing whether blockers are demand, integration cost, technical complexity, liquidity, security risk, incentive misalignment, commercial opportunity cost, or lack of ecosystem support.

**Evidence Type **Provider interviews, negative-case respondent data, public integration requirement documentation.

**Deliverable **Provider and Partner Opportunity Analysis, Negative-Case and Non-Cardano Evidence Summary.

**Starting Evidence**

None. This gate requires primary research. No assumptions made.

**Decision Gate **Gate 10: What evidence should be required before funding L2 or interoperability proposals?

**Method **Evidence threshold framework across five dimensions: demand evidence, blocker severity, value-flow benefit, adoption pathway, and measurable outcomes. Scoped to L2 and interoperability proposals specifically. Does not extend into broader ecosystem funding mechanism design.

**Evidence Type **Synthesised from all research phases.

**Deliverable **Evidence Threshold Framework using Appendix G template.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 15

**Starting Evidence**

Framework grounded in what this research found credible versus insufficient.

**Decision Gate **Gate 11: Which findings should be handed to adjacent RFPs or workstreams?

**Method **Cross-RFP dependency mapping throughout the research. Findings routed to: RFP 2 (stablecoin liquidity), RFP 3 (use-case positioning), RFP 5 (enterprise and RWA readiness), RFP 6 (government and emerging market entry), RFP 8 (delivery partners), RFP 09 (AI commercial positioning, scope confirmed, for Fetch.ai and ASI Cloud intelligence primitive findings where they touch AI commercial positioning rather than interoperability demand classification), DevX workstream, wallets workstream, liquidity workstream, and technical roadmap workstream. Scope assignments for RFPs 2, 3, 5, 6, and 8 will be confirmed with CPC at the Research Design Review in Milestone 1.

**Evidence Type **Synthesised from all research phases.

**Deliverable **Cross-RFP Handoff Memo.

**Starting Evidence**

VAL-003 DX finding routed to DevX workstream. Celo MiniPay liquidity finding routed to RFP 2.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 16

### SECTION 5: STAKEHOLDER ACCESS PLAN
A research proposal is only as strong as its access to real respondents. This section documents who NexTrium can reach, why those respondents are relevant, how they map to the use cases and pathways identified in the screening phase, and how insider bias and provider self-interest will be controlled.

**Team and Access Roles**

**Abdulbasit Adigun Abdulrahman**

Lead Researcher. Owns research design, all interviews, analysis, and deliverables. Builder credibility enables access to African Web3 respondents unfamiliar to external firms.

**Yuguda Muhammad **Research Coordinator. Owns respondent mapping, scheduling, note-taking, and data management across all four milestones.

**Samir Idris **Technical Advisor. Owns independent technical validation of VAL-003 and VAL-006 findings and review of provider claims during analysis phase.

**Respondent to Use Case and Pathway Mapping**

Each respondent category maps directly to specific use cases and interoperability pathways identified during the screening phase. Category 1 respondents map to blocked-demand cases in the African informal economy, specifically identity-dependent applications, covenant distribution workflows, trust scoring use cases, and oracle-attested economic activity. Category 2 respondents map to the infrastructure pathways underlying those use cases. Category 3 respondents map to the interoperability pathways screened for value-flow classification, covering bridge corridors, wallet integrations, messaging paths, and liquidity routing. Category 4 respondents map to the negative-case evidence base, providing external reference points for what deployment decisions look like when Cardano's infrastructure is not chosen.

**Respondent Category 1: African Informal Economy Builders and Operators on Cardano**

**Target range: 15 to 20 interviews.**

**Respondent Type Access Pathway Relevance**

Zivana Protocol / NexTrium

Lead builder Internal Applicant-supplied conflicted evidence. Findings treated separately from all independent evidence throughout and not used to establish segment-level demand without triangulation.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 17

**Respondent Type Access Pathway Relevance**

WADA community builders

Builder network Direct — WADA relationship

African Cardano application builders

African Cardano Catalyst funded teams

Builder network Direct — Catalyst community

Teams with deployment experience

UCSC Nigeria alumni network

Student builders

Direct — Abdulbasit former VP

Early-stage Lagos builders

UNILAG Web3 mentorship alumni

Student builders

Direct — UNILAG mentorship

Lagos-based builders

Balogun Market operator network

Informal economy operators

Direct — Sovela planned Market Reporter Network outreach infrastructure, currently in development

End-user population, demand evidence source

Web3Bridge Africa Developer training org

Community — Lagos Web3

Cross-chain exposure including Lisk

**Respondent Category 2: Infrastructure, Tooling, and Identity Providers**

**Target range: 6 to 10 interviews.**

**Respondent Type Access Pathway Relevance**

Hyperledger Identus maintainer community

Identity infrastructure

Direct — VAL-003 diagnostic work

VAL-003 blocker resolution pathway

Midnight Network developer community

ZK privacy infrastructure

Direct — VAL-002 devnet work

Partner chain, value-accretive

Orcfax Oracle infrastructure

Direct — VAL-004 schema work

Oracle layer, mutual-value

Fetch.ai / Agentverse community

Intelligence infrastructure

Direct — VAL-005 deployment

Intelligence layer, neutral-access

Input Output / IOG infrastructure teams

Core Cardano infrastructure

Ecosystem — Cardano Intersect

L2 roadmap assumptions

Charli3 Oracle infrastructure

Ecosystem — Cardano community

Secondary oracle provider

**Respondent Category 3: Bridge, Interoperability, and Wallet Providers**

**Target range: 5 to 8 interviews.**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 18

**Respondent Type Access Pathway Starting Classification**

Wanchain Decentralised bridge

Structured outreach Neutral-access to dependency-risk

Milkomeda EVM sidechain and bridge

Structured outreach Mutual-value to neutral-access

Rosen Bridge UTxO-native bridge

Structured outreach Neutral-access

Celo / MiniPay team Ethereum L2, stablecoin rail

Active — VAL-006 work

Dependency-risk to value-leakage risk

XDAO DAO tooling provider

Direct — existing relationship

Not yet classified

Swifin or Reltime Cross-border payment platform

Structured outreach Dependency-risk

**Respondent Category 4: Non-Cardano Builders and Negative-Case Respondents**

**Target range: 4 to 6 interviews.**

**Respondent Type Access Pathway Relevance**

Celo ecosystem builders Alternative chain builders

Direct — VAL-006 community

Chose Celo for last-mile payments

Stellar / Soroban builders Alternative chain builders

Community — African fintech

Stellar for African remittance

Polygon builders in Africa Alternative chain builders

Community — Lagos Web3

Chose Polygon for DeFi or identity

XDAO team DAO tooling non-Cardano

Direct — existing relationship

Has not prioritised Cardano

Web3Bridge Africa Lisk builders

Alternative chain builders

Community — Web3Bridge

Chose Lisk over Cardano

**Recruitment and Consent Protocol**

All respondents will be contacted with a clear description of the research purpose, the commissioning body, and how their input may be used. Respondents will be offered the choice of named attribution, anonymised attribution, or fully confidential treatment before the interview begins. No respondent will be recorded without explicit consent. Raw notes will be stored securely by Yuguda Muhammad and will not be shared outside the research team without the respondent's permission.

**Access Limitations and Honest Disclosure**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 19

NexTrium acknowledges two access limitations. First, the bridge, interoperability, and wallet provider category is the weakest in terms of existing relationships. If outreach does not yield the target range, this will be disclosed at the Stakeholder Access Check milestone and confidence levels adjusted accordingly. Second, the total respondent range of 30 to 44 is below the RFP's suggested upper range. This is a deliberate scope decision. The African informal economy represents precisely the kind of net-new user and application population the RFP identifies as the hardest question to answer, and a tightly scoped study of this segment produces stronger evidence on that question than a broader study that treats it as one data point among many. This is consistent with the RFP's own guidance that a narrower proposal with credible respondent access and strong decision value may be stronger than a broad proposal covering many pathways superficially. The limitations of this narrower scope should be acknowledged explicitly. Findings will be most confident for the Lagos and Nigerian informal economy builder population and may not fully represent L2 and interoperability demand patterns across East African, Francophone African, or Southern African markets. Respondent access for bridge and wallet provider categories may be insufficient to produce high-confidence provider-side classifications without the expanded outreach available under the stretch scope items in Section 14. These limitations will be stated explicitly in the Research Methodology Appendix and the public summary.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 20

### SECTION 6: VALUE-FLOW ASSESSMENT PLAN
The value-flow assessment is the most analytically demanding part of this RFP. It requires the research to make a principled judgment about which interoperability pathways benefit Cardano and which create risk. This section explains how NexTrium will conduct that assessment.

**Starting Framework**

The RFP defines five value-flow categories: value-accretive, mutual-value, neutral-access, dependency-risk, and value-leakage risk. NexTrium will apply these categories to every interoperability pathway identified during the screening phase. These classifications are demand and value-flow assessments. They are not architecture recommendations, bridge implementation proposals, liquidity incentive designs, or technical roadmap prescriptions. All five pre-classifications below are derived from NexTrium's own validation work and are treated as applicant-supplied conflicted evidence throughout this research. They are clearly separated from independent evidence and will not be used to establish segment-level demand or to assign a confidence level above low without triangulation from independent builders, providers, public data, or negative-case evidence.

Every pathway classification will systematically state all six required elements: (1) what the pathway is expected to bring into Cardano, covering users, liquidity, applications, transactions, and partner access as distinct inflow dimensions; (2) what may leave Cardano; (3) what retention mechanism or Cardano-side benefit exists; (4) what dependency risk exists; (5) what evidence supports the classification; (6) what confidence level applies.

No pathway will be classified as value-accretive or mutual-value on the basis of technical possibility, roadmap existence, community sentiment, or interoperability for its own sake.

**Pre-Classification from Validation Work**

**Midnight as ZK Partner Chain**

**Classification: Preliminary: Value-Accretive**

**Expected Inflows **ZK privacy capability unavailable on Cardano L1, retaining users and application logic within the Cardano ecosystem. Partner access through Midnight developer community.

**Potential Outflows**

Minimal. Midnight settles on Cardano. Application logic anchoring returns to Cardano.

**Retention Mechanism**

In Zivana Protocol's architecture, Midnight is being validated with Cardano as the settlement layer, meaning trust proof anchoring returns to Cardano for finality. This is specific to how Zivana is building on Midnight and does not constitute a universal claim about Midnight's architecture in other contexts.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 21

**Dependency Risk **Low. The dependency runs toward Cardano rather than away from it.

**Evidence **VAL-002 confirms ZK proof infrastructure functions on devnet for trust scoring use case.

**Confidence Level **Low confidence as applicant-supplied evidence. Upgradeable to medium confidence following independent Midnight developer community interview validation.

**Orcfax Oracle Integration**

**Classification: Preliminary: Mutual-Value**

**Expected Inflows **Verified economic activity data consumable by Cardano smart contracts. Revenue attestation for informal economy operators creates new application possibilities on Cardano.

**Potential Outflows**

Minimal. Oracle data is published to Cardano, not away from it.

**Retention Mechanism**

Orcfax's value proposition depends on Cardano smart contract consumption.

**Dependency Risk **Low. No user or liquidity routing away from Cardano.

**Evidence **VAL-004 confirms Orcfax revenue event fact statements publishable to testnet and queryable via Lucid on Cardano preprod.

**Confidence Level **Low confidence as applicant-supplied evidence. Upgradeable to medium confidence following independent Orcfax interview validation.

**Fetch.ai and ASI Cloud for Intelligence**

**Classification: Preliminary: Neutral-Access**

**Expected Inflows **Compute and agent orchestration capability. Market intelligence outputs formatted as Orcfax-compatible facts feed back into Cardano application layer.

**Potential Outflows**

No user or liquidity extraction.

**Retention Mechanism**

Intelligence outputs consumed by Cardano applications. No independent user base created on Fetch.ai.

**Dependency Risk **Low for Cardano. Creates dependency on ASI Cloud compute but does not route value away from Cardano.

**Evidence **VAL-005 confirms uAgent deployment, ASI Cloud function call, and Orcfax-compatible JSON output.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 22

**Confidence Level **Low confidence as applicant-supplied evidence. Upgradeable to medium confidence following independent Fetch.ai community interview validation.

**Celo MiniPay for Last-Mile Distribution**

**Classification: Preliminary: Dependency-Risk to Value-Leakage Risk**

**Expected Inflows **Nothing directly. This pathway routes value away from Cardano at the distribution layer.

**Potential Outflows**

Covenant distribution flows. Application-layer value generated by Cardano-settled covenants distributed via Celo MiniPay, an Ethereum L2.

**Retention Mechanism**

None currently. No Cardano-side stablecoin distribution rail with comparable phone-number-based UX and sub-cent fees.

**Dependency Risk **High. Celo is an Ethereum L2. This pathway connects Cardano application-layer value directly to the Ethereum ecosystem.

**Evidence **VAL-006 documents the applicant-supplied architectural decision made during protocol validation. The capability gap is reproducible and documented. Note: bridge volume data used only where source, destination, and retention analysis accompanies it.

**Confidence Level **Low confidence as applicant-supplied conflicted evidence. Upgradeable to medium confidence only following triangulation with independent builders, providers, public data, or negative-case evidence.

**Hyperledger Identus Identity Integration**

**Classification: Pending — Classification Blocked by VAL-003**

**Expected Inflows **W3C DID-anchored credentials on Cardano, verifiable credential issuance, identity infrastructure for trust without formal documentation.

**Potential Outflows**

Cannot be assessed until deployment is achievable.

**Retention Mechanism**

DID anchoring on Cardano creates a structural retention mechanism if integration functions correctly.

**Dependency Risk **Unknown pending VAL-003 resolution.

**Evidence **VAL-003 documents a fatal deployment blocker. Not yet tested end-to-end. If Phase 1 review determines the blocker is a deeper architectural constraint rather than a DX gap, the pathway will be classified as blocked and routed to the Cross-RFP Handoff Memo.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 23

**Confidence Level **Low. Classification assigned following Phase 1 technical review and Identus maintainer community interview.

**Classification Process and Confidence Labelling**

Each pathway classification will state the preliminary classification at low confidence as applicant-supplied evidence, test it through primary research, and produce a final classification with evidence basis, confidence level, dissenting evidence, and recommended action (fund now, coordinate, partner, monitor, defer, or reject). These six pathway-level actions apply to interoperability pathway recommendations. The eight blocker-level action categories described in Section 9, covering fund engineering, improve documentation, pursue wallet support, establish bridge or provider partnerships, coordinate liquidity, provide commercial incentives, activate builders, and reject, apply specifically to barrier classifications in the L2 Barrier Analysis. Where triangulation across multiple evidence types is possible, confidence will be raised from low to medium or high. No classification will be presented without a stated confidence level and evidence source. Forward-looking statements will be framed as evidence-based sequencing recommendations, not technical roadmap prescriptions.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 24

### SECTION 7: TEAM QUALIFICATIONS
**Abdulbasit Adigun Abdulrahman — Lead Researcher and Principal Investigator**

Abdulbasit is the founder and director of NexTrium Global Innovations Ltd, the incorporated successor to NexTrend Group. NexTrend Group was the operating identity under which Abdulbasit built his Cardano ecosystem presence, community relationships, and builder track record over several years. The transition to NexTrium reflects formal incorporation under the Corporate Affairs Commission of Nigeria, not a change in personnel, direction, or community standing. Every relationship, credential, and contribution built under NexTrend carries forward into NexTrium. The CPC should treat NexTrium as a formalised continuation of an established Cardano ecosystem presence, not as a new entrant.

He holds a BSc in Mathematics Education from the University of Lagos and brings a combination of technical building experience, ecosystem leadership, and community access directly relevant to this research.

On the technical side, he has led the design and validation of Zivana Protocol's five-primitive architecture across Cardano, Midnight, Hyperledger Identus, Orcfax, and Fetch.ai, producing the applicant-supplied conflicted starting evidence that forms this research's baseline evidence set, to be triangulated through independent primary research. He builds primarily in TypeScript, Node.js, and Aiken, and works across the full stack from smart contract logic to frontend interfaces.

On the ecosystem side, he serves as Governance Research Lead at Prisma Protocol, contributing to the litepaper as lead for the Governance, Trust, and Decision-Making domain. He has contributed to the broader ecosystem as DEEP Fund Marketing Coordinator and Ecosystem Contributor to ASI Alliance. He served as Vice President of the Unified Cardano Students Club Nigeria and is an active participant in Cardano Intersect, the WADA community, and the African Cardano Catalyst community. He has organised and contributed to events including the Cardano African Tech Summit, the Sandbox Hackathon, and the NexTrend Hub and WADA Hub launches.

**GitHub: **https://github.com/Basrahtop

**X / Twitter: **https://x.com/Basrahtop

**Portfolio: **https://devbasrahtop.com

**NexTrend X: **https://x.com/nextrendlabs

**NexTrium: **https://nextrium.org

**Yuguda Muhammad — Research Coordinator**

Yuguda Muhammad serves as Research Coordinator for this project. His responsibilities cover respondent mapping and recruitment across all four interview categories, interview

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 25

scheduling and logistics, structured note-taking and transcript organisation during sessions, data filing and version-controlled documentation management, and coordination of the research timeline across all four milestones.

He holds a BSc in Physics from Ahmadu Bello University and brings a combination of technical systems thinking, structured documentation practice, and cross-functional coordination experience directly applicable to this research.

At Adept Engineering Solutions, he produced comprehensive technical documentation of pipeline methodology, data schemas, and retrieval architecture for cross-team engineering review. He built and maintained compliance automation services tracking submission requirements, structural conformance, and content compliance across live federal solicitation documents, establishing fluency in structured checklist management, requirement traceability, and gap identification that maps directly onto the data organisation demands of this role.

He designed and operated output quality scoring systems at Adept, improving measured output quality scores from 30 percent to over 90 percent through iterative evaluation and refinement. His parallel work in LLM evaluation and annotation at Turing involved systematic written assessment of model outputs across large volumes of structured data with documented findings submitted against strict quality and schema standards.

**LinkedIn: **https://linkedin.com/in/yuguda

**GitHub: **https://github.com/Yuguda999

**Samir Idris — Technical Advisor**

Samir is a newly elected member of the Cardano Product Committee through the most recent Intersect election. He is an active Cardano builder with a track record of shipping production-level systems across multiple mainnet protocols including Minswap, FluidTokens, Metera, and Statera.

His technical work spans on-chain smart contract development using Aiken, covering lending protocols, DEX components, and batching and order-processing systems within the eUTxO model, and off-chain transaction construction using TypeScript with MeshJS and Lucid Evolution. He designed and implemented the complete smart contract system for Statera, a zero-interest lending and borrowing protocol on Cardano, and contributed to and optimised core contract flows at Minswap including a CIP-113 based implementation shipped to mainnet.

His CPC membership means he brings direct institutional familiarity with the decision context this research serves. His builder background means he can assess technical blocker claims against the reality of what shipping on Cardano's mainnet actually requires.

Within this project, Samir's mandate is scoped to two tasks: independent technical review of VAL-003 and VAL-006 findings before primary fieldwork begins, and technical review of infrastructure provider claims during the analysis phase. His technical review of VAL-003 and VAL-006 in Milestone 1 serves specifically to assess whether these applicant-supplied

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 26

findings represent reproducible and inspectable evidence that can be elevated from applicant-supplied conflicted evidence toward independently validated evidence. His CPC membership is declared as a potential conflict of interest and is managed as described in Section 11.

**Linktree: **https://linktr.ee/scisamir

**Team Structure and Scope Boundaries**

The three-person team is structured around a clear division of responsibilities. The lead researcher owns research design, interview conduct, analysis, and all deliverables. The research coordinator owns respondent access, logistics, and data management. The technical advisor owns technical validation of specific findings and is not responsible for research design or deliverable production. This structure is lean by design, consistent with the tightly defined research scope and the cost efficiency commitment of this proposal.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 27

### SECTION 8: WORKPLAN AND TIMELINE
The research is proposed as a 12-week project commencing from the kickoff date following award notification. On the assumption of award notification by 10 June 2026 and kickoff on Monday 22 June 2026, the research would run through Friday 11 September 2026.

**Four-Milestone Structure**

**M1: Foundation and Screening**

**Dates: 22 June — 10 July 2026**

**Activities: **Research design confirmed with CPC, all six VAL cases documented using Appendix B and C templates as applicant-supplied conflicted evidence, Samir Idris technical review of VAL-003 and VAL-006 complete to assess whether these findings are reproducible and inspectable and can be elevated from applicant-supplied conflicted evidence toward independently validated evidence, desk research complete, screening report produced, respondent shortlist finalised, stakeholder access check completed.

**Key Outputs: **Research design document, preliminary VAL-case evidence set, desk research summary, screening report, access status update.

**M2: Primary Research**

**Dates: 6 July — 7 August 2026**

**Activities: **All 30 to 44 interviews conducted across four categories. Builder and operator interviews Weeks 3 to 5, infrastructure and provider interviews Weeks 4 to 6, non-Cardano and negative-case interviews Weeks 5 to 7. Phases overlap deliberately for schedule resilience. Initial blocked-demand case register produced. Each initial blocked-demand case checked against the relevant L2 or interoperability workflow test confirming the blocker directly ties to a named L2 or interoperability use case before being recorded. Early demand signal review delivered to CPC.

**Key Outputs: **Initial blocked-demand case register (minimum 8 to 15 cases). Early demand signal review.

**M3: Analysis and Draft Deliverables**

**Dates: 3 August — 4 September 2026**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 28

**Activities: **All blockers classified across eight dimensions using full Appendix B taxonomy. Final value-flow classifications produced for all screened pathways with all six elements stated systematically. Requirements register compiled. Provider and partner opportunity analysis produced. All confidence levels applied with triangulation noted. Interim findings review and draft deliverables review completed with CPC.

**Key Outputs: **Draft L2 Barrier Analysis, Draft L2 Demand Map, Draft Interoperability Requirements Register, Draft Value-Flow Assessment, Draft Provider Analysis, Draft Investment Sequencing, Draft Evidence Threshold Framework, Draft Cross-RFP Handoff Memo, Draft Executive Decision Memo.

**M4: Final Deliverables and Publication**

**Dates: 7 September — 11 September 2026**

**Activities: **CPC feedback incorporated from M3 draft review. All deliverables finalised. Final presentation delivered to CPC on 8 September 2026. Public summary reviewed with CPC on 10 September 2026 and published following approval. The M4 payment of 20 percent reflects that the bulk of analytical work is completed and accepted in M3. M4 covers final refinement, presentation delivery, and public summary publication.

**Key Outputs: **Final Research Report, Final Presentation (8 September), Public Summary (published post-CPC approval), all supporting deliverables in final form.

**Detailed Weekly Workplan**

**Period Dates Phase CPC Checkpoint**

Week 1 22—26 Jun Kickoff and Alignment Kickoff Meeting — 23 Jun

Weeks 1—2 22 Jun—3 Jul Evidence Baseline, Desk Research, Research Design

Research Design Review — 3 Jul

Weeks 2—3 29 Jun—10 Jul Screening Phase Screening Review and Stakeholder Access Check — 10 Jul

Weeks 3—5 6 Jul—24 Jul Builder and Operator Interviews Early Demand Signal Review — 24 Jul

Weeks 4—6 13 Jul—31 Jul Infrastructure, Bridge, and Provider Interviews

None scheduled

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 29

**Period Dates Phase CPC Checkpoint**

Weeks 5—7 20 Jul—7 Aug Non-Cardano and Negative-Case Interviews

None scheduled

Weeks 7—9 3 Aug—21 Aug Analysis and Classification Interim Findings Review — 13 Aug

Weeks 9—11

17 Aug—4 Sep Deliverable Production Draft Deliverables Review — 28 Aug

Week 12 7—11 Sep Final Report and Public Summary Final Presentation — 8 Sep; Public Summary Review — 10 Sep

*Note: M2 dates of 6 July to 7 August 2026 encompass all three overlapping primary research phases running in parallel. The overlap is intentional and builds resilience into the interview schedule.*

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 30

### SECTION 9: RISK AND BIAS MITIGATION
The RFP requires a research integrity plan. This section maps each risk to a named control, explains how NexTrium will implement it, and acknowledges residual risk.

**Risk 1: Cardano Insider Bias**

**Description **NexTrium is a Cardano builder with a direct interest in Cardano's infrastructure improving.

**Control **Four controls: (1) Non-Cardano and negative-case respondents required, not optional, presented without positive filtering. (2) All major findings distinguish Cardano-insider from external evidence explicitly. All evidence derived from NexTrium's own validation work is treated as applicant-supplied conflicted evidence throughout the research, clearly separated from independent operator, provider, and external evidence in all analysis and deliverables. (3) Samir Idris technical review tests whether blocker classifications reflect general ecosystem reality not just Zivana's architecture, and specifically assesses whether applicant-supplied VAL findings can be elevated toward independently validated evidence. (4) Conflicts declaration in Section 11 discloses the lead researcher's builder position.

**Residual Risk **Low to medium. The negative-case respondent category is the primary structural safeguard.

**Risk 2: Technical Roadmap Bias**

**Description **Risk that research frames blockers in terms of what Zivana needs rather than what the broader builder population needs.

**Control **All roadmap assumptions tested against builder and operator interview evidence before presentation as findings. Samir Idris flags any finding where blocker classification reflects Zivana-specific constraints rather than broadly shared barriers. All forward-looking recommendations framed as evidence-based sequencing recommendations, not roadmap prescriptions.

**Residual Risk **Low. The screening phase surfaces use cases beyond Zivana's own architecture.

**Risk 3: Provider Self-Interest**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 31

**Description **Infrastructure and bridge providers have incentives to present their roadmap positively and overstate integration value.

**Control **Evidence from providers seeking funding or support labelled accordingly and treated as separate from independent demand evidence. Provider claims cross-referenced against builder-side evidence and public documentation. Samir Idris reviews technically complex provider claims. Provider interviews specifically test whether blockers are demand, integration cost, technical complexity, liquidity, security risk, incentive misalignment, commercial opportunity cost, or lack of ecosystem support.

**Residual Risk **Medium. The confidence labelling system is the primary mitigation.

**Risk 4: False L2 Demand**

**Description **Builders may claim L2 dependency for applications where the actual blocker is liquidity, wallets, integrations, tooling, commercial uncertainty, compliance, partner access, or user demand.

**Control **Every demand claim requires identification of a specific blocked workflow and a specific deployment decision pending resolution. Every blocker claim will be tested against the relevant L2 or interoperability workflow requirement confirming the blocker directly ties to a named L2 or interoperability use case, not a general infrastructure observation. The seven non-L2 blocker types tested explicitly are: liquidity gaps, wallet support gaps, bridge or provider access gaps, tooling failures, commercial uncertainty, compliance constraints, partner access barriers, and user demand shortfalls.

**Residual Risk **Low. The RFP's own definitions of blocked demand and cosmetic signal are adopted as the evidence standard.

**Risk 5: Misclassified Blockers**

**Description **A technical blocker may actually be a documentation failure, DX gap, ecosystem problem, or commercial uncertainty.

**Control **Full Appendix B taxonomy separates nine blocker types: technical, commercial, ecosystem, liquidity, UX, tooling, coordination, compliance, and unknown. Ecosystem blockers treated as distinct from tooling blockers. Every blocker assigned a recommended action from the full set including reject.

**Residual Risk **Low to medium. Ambiguous blockers classified as unknown with explicit explanation.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 32

**Risk 6: Interoperability Optimism Bias**

**Description **General tendency to treat more interoperability as automatically positive.

**Control **Celo MiniPay pre-classified as dependency-risk to value-leakage risk demonstrates willingness to document unfavourable findings. Value-flow assessment requires evidence of retention mechanisms before positive classification. The full range of interoperability feature types tested explicitly during interviews.

**Residual Risk **Low. Pre-classification of own distribution infrastructure as value-leakage risk signals this control is applied in good faith.

**Risk 7: False Precision**

**Description **Demand estimates presented with more precision than evidence supports.

**Control **All scale estimates presented as indicative ranges with stated assumptions and confidence levels. IFC and WEF figures used as contextual framing only, not as demand evidence for Cardano adoption specifically. Bridge volume data used only where source, destination, and retention analysis accompanies it.

**Residual Risk **Low.

**Risk 8: Weak Respondent Access**

**Description **Bridge and provider outreach may not yield sufficient responses.

**Control **Risk disclosed proactively. If outreach does not yield target range by end of screening phase, reported to CPC at Stakeholder Access Check. Confidence levels for provider-side findings adjusted accordingly.

**Residual Risk **Medium. Most honest residual risk in this proposal.

**Risk 9: Scope Creep**

**Description **Findings in adjacent areas may expand scope beyond what the team can deliver.

**Control **Cross-RFP Handoff Memo routes all adjacent findings rather than absorbing them. Liquidity incentive design, technical roadmap authorship, bridge implementation, and L2 protocol design explicitly outside scope.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 33

**Residual Risk **Low.

**Risk 10: Confidentiality Reducing Public Usefulness**

**Description **Excessive confidentiality may make the public summary too vague to be useful.

**Control **Default approach publishes findings at theme and category level rather than named-respondent level. Named evidence withheld only where respondent requests confidentiality or where publication creates commercial, security, or competitive risk.

**Residual Risk **Low.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 34

### SECTION 10: BUDGET BREAKDOWN
**Total Proposed Budget: 25,000 ADA**

**Market Rate Benchmarks**

The following verified market rates are used as reference benchmarks for individual compensation in this proposal. The average hourly pay for a blockchain consultant in the United States is approximately $49.72, with senior blockchain consultants averaging $71 per hour and top earners reaching $99 per hour (ZipRecruiter, Glassdoor 2025/2026). In the United Kingdom, market research freelancers averaged $61 per hour in 2024 with top-tier researchers averaging $98 per hour (YunoJuno 2024). Entry-level research coordinators average $19 per hour in the United States (Payscale 2026).

- ZipRecruiter Blockchain Consultant Salary January 2026: https://www.ziprecruiter.com/Salaries/Blockchain-Consultant-Salary

- Glassdoor Blockchain Consultant Salary 2025: https://www.glassdoor.com/Salaries/blockchain-consultant-salary-SRCH_KO0,21.htm

- YunoJuno Freelance Rates Report Market Research 2024: https://www.yunojuno.com/freelancer-rates-report/market-research

- Payscale Research Coordinator Hourly Rate 2026: https://www.payscale.com/research/US/Job=Research _Coordinator/Hourly_Rate/6d38cf7c/Entry-Level-Oral-Verbal-Communication

**Individual Compensation Justification**

**Abdulbasit Adigun Abdulrahman — Lead Researcher**

**10,000 ADA (~$2,400 to $2,800 USD)**

**Scope **Research design, instrument development, conduct of all 30 to 44 interviews, evidence baseline documentation, analysis and classification, production of all 16 required deliverables, CPC checkpoint participation, final presentation, public summary. Full 12-week engagement.

**Est. Hours **~160 to 180 hours across full project, averaging 13 to 15 hours per week.

**Effective Rate **~$13 to $17 USD per hour effective rate.

**Market Comparison**

73 to 84% below average US blockchain consultant freelance rate of $49.72 to $71 per hour. Rate reflects existing validation work, community access, and documented starting evidence eliminating costs an external consultant would charge for.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 35

**Yuguda Muhammad — Research Coordinator**

**5,000 ADA (~$1,200 to $1,400 USD)**

**Scope **Respondent mapping and recruitment, scheduling and logistics, structured note-taking, secure data organisation, timeline coordination across all four milestones.

**Est. Hours **~100 to 120 hours across full project, averaging 8 to 10 hours per week.

**Effective Rate **~$10 to $14 USD per hour effective rate.

**Market Comparison**

26 to 47% below US entry-level research coordinator average of $19 per hour. Reflects Lagos-based cost context and ecosystem-contributing nature of engagement.

**Samir Idris — Technical Advisor**

**4,000 ADA (~$960 to $1,120 USD)**

**Scope **Independent technical review of VAL-003 and VAL-006 findings in Milestone 1. Technical review of provider claims in Milestone 3. Participation in Research Design Review and Interim Findings Review.

**Est. Hours **~40 to 50 hours across two defined task windows.

**Effective Rate **~$19 to $28 USD per hour effective rate.

**Market Comparison**

72 to 81% below open market rate of $71 to $99 per hour for a senior blockchain consultant with CPC membership and mainnet shipping credentials across four production protocols. Strongest individual value-for-money position in this budget.

**Milestone-Based Payment Schedule**

Payments are tied to milestone delivery and CPC acceptance of outputs rather than elapsed time alone. This protects the CPC's investment and aligns incentives with research quality.

**Milest one**

**Name Dates Key Outputs Payment on Acceptance**

M1 Foundation and Screening

22 Jun — 10 Jul 2026

Research design, VAL cases, desk research, screening report, access check

6,250 ADA (25%)

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 36

**Milest one**

**Name Dates Key Outputs Payment on Acceptance**

M2 Primary Research 6 Jul — 7 Aug 2026

All interviews complete, initial blocked-demand register, early signal review

6,250 ADA (25%)

M3 Analysis and Draft Deliverables

3 Aug — 4 Sep 2026

All classifications, full draft deliverable set, interim and draft reviews

7,500 ADA (30%)

M4 Final Deliverables and Publication

7—11 Sep 2026

Final report, final presentation, public summary published

5,000 ADA (20%)

Total 25,000 ADA

**Budget Summary**

**Line Item Purpose ADA**

Lead Researcher Research design, interviews, analysis, deliverables 10,000

Research Coordinator Respondent access, logistics, note-taking 5,000

Technical Advisor Technical validation, milestone checkpoints 4,000

Research Operations Provider access, negative-case outreach, tools, consent, communication

4,000

Contingency Unforeseen access or tooling costs — returned if unused 2,000

Total 25,000

**Value for Money Argument**

The total cost of 25,000 ADA represents approximately $5,500 to $6,500 USD for a 12-week, 30 to 44 respondent study producing 16 required deliverables. An equivalent engagement commissioned from an external research firm at mid-market blockchain consultant rates of $50 to $75 per hour would cost approximately $25,000 to $40,000 USD for the lead researcher role alone, with the full external market equivalent ranging from $35,000 to $55,000 USD or approximately 145,000 to 228,000 ADA at current rates.

NexTrium's proposal delivers the same scope at approximately 11 to 17 percent of the external market equivalent cost. The primary value drivers are: (1) existing documented evidence base eliminating preliminary research costs; (2) established community access eliminating cold-outreach costs; (3) Samir Idris's technical review capacity at a rate 72 to 81 percent below open market equivalent for that calibre of expertise; (4) research operations budget explicitly covering provider access and negative-case outreach costs; (5) deliberately narrow scope producing higher-confidence findings.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 37

### SECTION 11: CONFLICTS OF INTEREST DECLARATION
NexTrium Global Innovations Ltd makes the following declarations on behalf of all named team members in accordance with the requirements of RFP 07.

**Abdulbasit Adigun Abdulrahman — Lead Researcher**

Abdulbasit is the founder and director of NexTrium Global Innovations Ltd and the lead contributor to Zivana Protocol. Zivana Protocol is referenced throughout this proposal as a primary evidence case and is the source of the baseline validation findings that form the research's starting evidence set. This constitutes a declared potential conflict of interest.

Management approach: In accordance with CPC clarification guidance received during the submission process, all evidence derived from Zivana Protocol's validation work is treated as applicant-supplied conflicted evidence throughout this research. It is clearly separated from independent evidence, will not by itself establish segment-level demand or value-flow classifications above low confidence, and its confidence level depends on documentation available, CPC inspectability, reproducibility, and triangulation with independent sources. All findings derived from Zivana's architecture will be distinguished from independent builder and operator evidence throughout the research and in all deliverables. Findings that do not support Cardano infrastructure investment, including findings that recommend reject, will be reported without filtering.

Abdulbasit serves as Governance Research Lead at Prisma Protocol. This role does not create a financial interest in any infrastructure providers, bridge protocols, or interoperability pathways assessed in this research.

Abdulbasit has contributed to the broader ecosystem as DEEP Fund Marketing Coordinator and Ecosystem Contributor to ASI Alliance. Neither role creates a financial interest in or governance position over any assessed entity.

Abdulbasit is an active participant in Cardano Intersect. This participation does not create a governance position that would compromise independent research findings.

No financial exposure to bridge providers, interoperability protocols, partner-chain teams, wallet providers, or liquidity providers assessed in this research is declared at the time of submission.

**Yuguda Muhammad — Research Coordinator**

No conflicts of interest are declared at the time of submission. Yuguda Muhammad does not hold governance, advisory, or financial positions in any Cardano ecosystem entity, bridge provider, interoperability protocol, or infrastructure team that would be assessed in this research.

**Samir Idris — Technical Advisor**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 38

Samir is a newly elected member of the Cardano Product Committee through the most recent Intersect election. His CPC membership means he serves on the body that commissions and evaluates this research. This constitutes a declared potential conflict of interest.

Management approach: Consistent with his published Intersect election declaration, Samir does not hold any governance position that would compromise independent decision-making and will disclose any potential conflict and recuse himself where appropriate. Within this research, Samir's role is scoped exclusively to technical validation of specific findings in Milestones 1 and 3 and does not extend to research design, deliverable production, or recommendations to the CPC. His technical review outputs will be clearly attributed and distinguished from the lead researcher's analysis in all deliverables.

Samir has contributed to and shipped products with Minswap, FluidTokens, Metera, and Statera. None of these protocols are bridge providers, interoperability protocols, or infrastructure teams assessed in the value-flow or provider opportunity sections of this research. No financial exposure to any assessed provider or pathway is declared at the time of submission.

**Subcontracting**

No subcontractors are engaged beyond the named team members above. If any subcontracting becomes necessary during the research, it will be disclosed to CPC immediately with full details of roles, responsibilities, costs, and any conflicts.

**General Declaration**

No team member holds ownership or commercial interest in any bridge provider, interoperability protocol, partner chain, wallet provider, or liquidity provider that may be assessed in this research. No team member intends to apply for Cardano ecosystem funding directly connected to the findings of this research in a way that would create a material conflict with the research outputs. All declared conflicts are managed through the controls described above and will be disclosed immediately to the CPC if circumstances change during the research period.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 39

### SECTION 12: ETHICS AND DATA HANDLING STATEMENT
This section consolidates the ethics and data handling approach for this research in accordance with the Submission Pack requirement for a standalone ethics and data handling statement.

**Research Ethics Approach**

This research involves interviews with builders, operators, infrastructure providers, bridge providers, and other commercially active stakeholders. NexTrium applies the following baseline human-subject safeguards to every interview and survey interaction throughout the project. Before each interview, every respondent will be told the purpose of the research, who commissioned it, who the research is for, and how their input may be used. Respondents will be asked explicitly whether their comments are attributable by name, attributable by category only, or fully confidential. No respondent will be recorded without explicit verbal or written consent. Respondents will be given the opportunity to clarify or withdraw attribution status after the interview. NexTrium will not expose respondents to employment, commercial, security, regulatory, or competitive risk through the publication of findings.

**Informed Consent Protocol**

Yuguda Muhammad will manage a consent tracking register throughout the project. Every respondent will be logged with their consent status before their interview. Consent status categories: Named attribution (consented to being identified by name and organisation), Anonymised attribution (consented to views being published but not attributed), Confidential (input used only to inform analysis, not published in any identifiable form), No contact (declined to participate, will not be approached again). No interview will proceed without a documented consent status.

**Anonymisation Approach**

Published outputs will use the minimum level of identification necessary to make findings useful. The Blocked-Demand Case Register will distinguish named, confidential, and anonymised cases explicitly. The Provider and Partner Opportunity Analysis will use category-level descriptions for providers who have not consented to named attribution. The public summary will not contain any information that could identify a confidential respondent through context, combination of details, or process of elimination.

**Data Storage and Security**

All raw interview notes will be stored securely by Yuguda Muhammad in a password-protected environment accessible only to the research team. Raw notes will not be shared outside the research team without explicit respondent consent. Data will be retained for a minimum of two years following project completion to allow CPC inspection if required. After the two-year retention period, data will be deleted or anonymised unless CPC requests extended retention in writing.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 40

**Confidentiality and Publication Boundaries**

Research outputs will be produced in two tiers. The confidential tier covers the full research report and supporting deliverables, accessible to CPC and approved reviewers. The public tier covers the public summary, accessible to the broader ecosystem. The public tier will not contain confidential respondent identities, unreleased technical roadmap details, commercially sensitive provider information, security-sensitive bridge or infrastructure details, or confidential integration plans. If any finding cannot be published in any useful form due to confidentiality constraints, that limitation will be disclosed in the public summary with an explanation of why the finding is withheld.

**Proprietary and Paid Data Handling**

No proprietary datasets are planned for this research. All primary data will be generated through interviews and desk research using publicly available sources. The research operations budget includes contingency for paid expert calls if bridge or provider outreach requires an intermediary introduction. If any proprietary, paid, or non-public data source becomes necessary, NexTrium will immediately disclose to CPC the source, access conditions, whether CPC can inspect the data, whether it can be cited publicly, what limitations apply, and whether it can be retained after project completion.

**Bias Controls and Research Integrity**

The ethics and data handling approach operates in conjunction with the research integrity controls described in Section 9. NexTrium will not wait until the final report to disclose weak respondent access, unsupported demand claims, technical feasibility uncertainty, provider non-responsiveness, or evidence that conflicts with preliminary findings. Material issues will be disclosed at the earliest relevant CPC checkpoint as described in Section 8.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 41

### SECTION 13: DELIVERABLES PLAN
This section provides a consolidated map of all required deliverables, their content requirements, acceptance criteria, milestone schedule, and confidentiality treatment. NexTrium will produce all deliverables as standalone documents unless combination is explicitly noted.

**D1: L2 Barrier Analysis**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**Description **Ranked analysis of what is blocking L2-dependent deployment on Cardano across the African informal economy builder population.

**Content Requirements**

Separates all nine blocker types: technical, commercial, ecosystem, liquidity, UX, tooling, coordination, compliance, and unknown. Each entry includes blocker description, affected use case, blocker type, severity, adoption impact, urgency, evidence source, confidence level, proposed owner or workstream, and recommended action from the full set including reject. Every blocker entry must include a relevance confirmation stating how the blocker directly ties to a specific L2 or interoperability workflow. Applicant-supplied conflicted evidence entries are clearly labelled and separated from independent evidence entries.

**Acceptance Criteria**

Separates technical, commercial, ecosystem, liquidity, UX, coordination, and unknown blockers. Includes evidence source, affected use case, severity, confidence level, and proposed owner. Does not treat all blockers as technical. Ranks barriers with explained impact.

**D2: L2 Demand Map**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**Description **Map of applications and use cases waiting on L2 or interoperability capability across the African informal economy builder population.

**Content Requirements**

Every entry includes all nine required dimensions: application or use-case category, blocked workflow, required L2 capability, deployment condition, expected adoption pathway, indicative scale range, timing assumptions, confidence level, and source basis. Scale estimates as indicative ranges with stated assumptions.

**Acceptance Criteria**

Includes all nine dimensions. Does not list speculative ideas or rely on self-reported demand only. Includes deployment condition and scale logic for every entry.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 42

**D3: Interoperability Requirements Register**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**Description **Ranked register of interoperability features requested by builders, operators, bridge providers, infrastructure teams, and other relevant stakeholders.

**Content Requirements**

Every entry includes all eight required dimensions: requested feature, user or operator type, chain or corridor or pathway, frequency, urgency, blocker status, adoption consequence, evidence source, and confidence level. Distinguishes must-have from nice-to-have.

**Acceptance Criteria**

Classifies by user or operator type, chain or corridor, frequency, urgency, blocker status, adoption consequence, evidence source, and confidence. Does not produce a generic feature wish list.

**D4: Interoperability Value-Flow Assessment**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**Description **Classification of priority cross-chain pathways by Cardano-side value and dependency risk using the five-category RFP framework.

**Content Requirements**

Every pathway classification states all six required elements: expected inflows (users, liquidity, applications, transactions, partner access), potential outflows, retention mechanism, dependency risk, evidence, and confidence. Uses five agreed categories. Bridge volume data used only where source, destination, and retention analysis accompanies it. All pathway classifications derived from NexTrium applicant validation work are labelled as applicant-supplied conflicted evidence and separated from independent evidence throughout. No applicant-supplied finding is used to establish a confidence level above low without independent triangulation.

**Acceptance Criteria**

Assesses all inflow and outflow dimensions. Does not treat every connection as positive. Does not ignore outflow risk. Includes source, destination, and retention logic.

**D5: Provider and Partner Opportunity Analysis**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 43

**Description **Assessment of bridge, interoperability, partner-chain, wallet, and infrastructure providers relevant to Cardano's African emerging market opportunity.

**Content Requirements**

Every provider entry includes all nine Appendix F dimensions: provider or partner type, current Cardano status, integration blocker, commercial incentive, technical effort, demand evidence, mutual benefit, risk, and recommended action. Supported by peer ecosystem benchmarking.

**Acceptance Criteria**

Includes all nine dimensions. Does not list providers without decision logic. Does not ignore why providers have not prioritised Cardano.

**D6: Blocked-Demand Case Register**

**Milestone: Initial M2, Final M4 | Confidentiality: Summary public**

**Description **Documented cases where specific applications, workflows, or operators are waiting on L2 or interoperability capability.

**Content Requirements**

Minimum 8 to 15 documented cases. VAL-003 and VAL-006 serve as Cases 1 and 2 at low confidence as applicant-supplied conflicted evidence, upgradeable following Samir Idris technical review and independent builder triangulation. Each case distinguishes named, confidential, and anonymised evidence. Each case includes blocker, deployment decision pending, evidence source, and confidence level. Every case must pass the relevant L2 or interoperability workflow test confirming the blocker directly ties to a named L2 or interoperability use case.

**Acceptance Criteria**

Applicant-justified number of cases. Distinguishes named, confidential, and anonymised evidence. Includes blocker, decision pending, source, and confidence. Does not use vague builders say claims.

**D7: Negative-Case and Non-Cardano Evidence Summary**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**Description **Evidence from stalled deployments, rejected integrations, competitor chain choices, and non-Cardano operator perspectives.

**Content Requirements**

Includes negative cases, non-Cardano comparisons, and stalled or rejected pathways. For each case, explains what Cardano should learn or avoid. Does not filter for positive outcomes.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 44

**Acceptance Criteria**

Includes negative cases, non-Cardano comparisons, or stalled pathways. Explains what Cardano should learn or avoid. Does not rely only on positive Cardano cases.

**D8: Investment Sequencing Recommendation**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**Description **Recommended order of L2 and interoperability actions converting research findings into funding and coordination decisions.

**Content Requirements**

Ranks all recommended actions by validated demand, impact, urgency, dependency, cost driver, owner or workstream, confidence, expected Cardano-side value, and action type. Uses full action set including reject. Framed as evidence-based sequencing recommendations, not roadmap prescriptions.

**Acceptance Criteria**

Ranks by all required dimensions. Does not produce broad recommendations without sequencing. Connects all actions to evidence and decision gates.

**D9: Evidence Threshold Framework**

**Milestone: Draft M3, Final M4 | Confidentiality: Fully public**

**Description **Reusable standard for assessing future L2 and interoperability grant, partnership, and roadmap proposals.

**Content Requirements**

Defines minimum evidence required across five dimensions for each proposal type: demand evidence, blocker severity, value-flow benefit, adoption pathway, and measurable outcomes. Scoped to L2 and interoperability proposals specifically.

**Acceptance Criteria**

Defines minimum evidence for demand, blocker severity, value-flow benefit, adoption pathway, and measurable outcomes. Helps reviewers distinguish strong from weak proposals.

**D10: Technical and Commercial Blocker Taxonomy**

**Milestone: Compiled progressively M1 through M3, Final M4 | Confidentiality: Fully public**

**Description **Reusable classification system for L2 and interoperability blockers ensuring findings are routed to the correct owner or workstream.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 45

**Content Requirements**

Standalone reference document covering all nine blocker types with definitions, distinguishing characteristics, and routing guidance. Maps each blocker type to its corresponding action category and responsible workstream.

**Acceptance Criteria**

Provides a reusable classification system. Ensures blockers are routed correctly. Distinguishes ecosystem blockers from tooling blockers explicitly.

**D11: Research Methodology Appendix**

**Milestone: Compiled progressively M1 through M3, Final M4 | Confidentiality: Summary public**

**Description **Full methodology documentation making all research findings auditable by CPC and ecosystem readers.

**Content Requirements**

Covers all six required components: respondent categories and recruitment method, interview and survey instruments, evidence limits, proprietary data restrictions, confidence rubric, and limitations including scope boundaries and access constraints.

**Acceptance Criteria**

Lists respondent categories, recruitment method, instruments, evidence limits, proprietary data restrictions, and confidence rubric. Does not hide methods. Explains limitations and respondent bias.

**D12: Cross-RFP Handoff Memo**

**Milestone: Compiled progressively M2 through M3, Final M4 | Confidentiality: Fully public**

**Description **Routing document mapping findings that touch adjacent RFPs or workstreams to their correct destinations.

**Content Requirements**

Maps dependencies to RFP 2 (stablecoin liquidity), RFP 3 (use-case positioning), RFP 5 (enterprise and RWA readiness), RFP 6 (government and emerging market entry), RFP 8 (delivery partners), RFP 09 (AI commercial positioning), DevX workstream, wallets workstream, liquidity workstream, and technical roadmap workstream.

**Acceptance Criteria**

Maps dependencies to all named adjacent RFPs and workstreams. Does not absorb adjacent RFPs into scope. Identifies all relevant dependencies.

**D13: Executive Decision Memo**

**Milestone: Draft M3, Final M4 | Confidentiality: Summary public**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 46

**Description **Short decision-ready summary supporting fast CPC review and prioritisation.

**Content Requirements**

States top findings, recommended investment sequence, investment implications, unresolved questions, and reject or deprioritisation findings with stated rationale. Maximum five pages.

**Acceptance Criteria**

States top findings, recommended sequence, investment implications, unresolved questions, and reject or deprioritisation findings. Does not summarise activity without stating decisions.

**D14: Final Research Report**

**Milestone: Draft M3, Final M4 | Confidentiality: Confidential**

**Description **Complete research report providing the full evidence base and recommendations for CPC and approved stakeholders.

**Content Requirements**

Answers all eleven decision gates with traceable evidence. Includes full methodology, all findings with confidence levels, all limitations and evidence caveats, all required deliverables, and all recommended actions with evidence basis.

**Acceptance Criteria**

Answers all decision gates. Includes methods, findings, confidence levels, limitations, and recommended actions. Does not produce long narrative without decision answers.

**D15: Final Presentation**

**Milestone: M4 — 8 September 2026 | Confidentiality: Confidential**

**Description **Presentation of research findings and recommended actions for CPC review, questioning, and alignment.

**Content Requirements**

Covers all major findings with confidence levels, limitations acknowledged, decisions enabled, and recommended actions. Delivered live to CPC on 8 September 2026.

**Acceptance Criteria**

Presents findings, confidence levels, limitations, decisions enabled, and recommended actions. Supports review and questioning.

**D16: Public Summary**

**Milestone: M4 — published post-CPC approval, 10 September 2026 | Confidentiality: Fully public**

**Description **Non-confidential summary suitable for publication to the broader Cardano ecosystem.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 47

**Content Requirements**

Includes methodology overview, respondent category summary, high-level demand findings, high-level L2 blocker findings, high-level interoperability requirements, publishable value-flow themes, recommended investment sequencing where publishable, and limitations and evidence caveats. Excludes all confidential information.

**Acceptance Criteria**

Includes methodology overview, publishable findings, high-level recommendations, caveats, and confidentiality limits. Not too vague to be useful. Does not expose confidential details.

**Deliverables Summary Table**

**No. Deliverable Milestone Confidentiality**

D1 L2 Barrier Analysis Draft M3, Final M4 Summary public

D2 L2 Demand Map Draft M3, Final M4 Summary public

D3 Interoperability Requirements Register Draft M3, Final M4 Summary public

D4 Interoperability Value-Flow Assessment Draft M3, Final M4 Summary public

D5 Provider and Partner Opportunity Analysis Draft M3, Final M4 Summary public

D6 Blocked-Demand Case Register Initial M2, Final M4 Summary public

D7 Negative-Case and Non-Cardano Evidence Summary

Draft M3, Final M4 Summary public

D8 Investment Sequencing Recommendation Draft M3, Final M4 Summary public

D9 Evidence Threshold Framework Draft M3, Final M4 Fully public

D10 Technical and Commercial Blocker Taxonomy Progressive M1-M3, Final M4

Fully public

D11 Research Methodology Appendix Progressive M1-M3, Final M4

Summary public

D12 Cross-RFP Handoff Memo Progressive M2-M3, Final M4

Fully public

D13 Executive Decision Memo Draft M3, Final M4 Summary public

D14 Final Research Report Draft M3, Final M4 Confidential

D15 Final Presentation M4 — 8 Sep 2026 Confidential

D16 Public Summary M4 — post-CPC approval

Fully public

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 48

### SECTION 14: OPTIONAL STRETCH SCOPE
The following stretch scope items are offered as optional additions to the core research commitment. They are priced separately from the core 25,000 ADA budget in accordance with the RFP's guidance that optional methods and stretch work should be separated from core scope and budget. Each item adds decision value beyond the core deliverables and can be commissioned independently or in combination. The CPC may select any combination of stretch items at the time of award.

**S1: Deeper Peer Ecosystem Benchmarking**

**Price: 3,000 ADA**

**Description **Extended comparative analysis of how Celo, Stellar, Polygon, and Lisk have converted L2 and interoperability infrastructure into adoption in African and emerging markets. The core scope includes benchmarking sufficient to support provider and partner recommendations. This stretch item extends that benchmarking to a wider set of ecosystems and deeper analysis of specific mechanisms, incentives, and sequencing decisions.

**Decision Value **Enables the CPC to make more informed comparisons between Cardano's current trajectory and approaches taken by ecosystems that have successfully attracted African market builders. Prevents Cardano from repeating known failures or overlooking proven approaches.

**Additional Deliverable**

Peer Ecosystem Benchmarking Report as a standalone supplement to the Provider and Partner Opportunity Analysis.

**S2: Deeper Analysis of Specific Bridge Corridors or Partner-Chain Candidates**

**Price: 2,500 ADA**

**Description **Extended deep-dive analysis of two to three specific bridge corridors or partner-chain candidates identified during screening as highest priority for the African informal economy use case. Adds detailed provider engagement, technical feasibility assessment, commercial incentive modelling, and integration roadmap analysis.

**Decision Value **Converts high-level value-flow classifications into actionable partnership or integration recommendations with sufficient detail for the CPC to initiate BD conversations or technical collaboration discussions immediately following the research.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 49

**Additional Deliverable**

Bridge Corridor and Partner-Chain Deep-Dive Analysis as a standalone supplement to the Provider and Partner Opportunity Analysis.

**S3: Additional Non-Cardano and Negative-Case Interviews**

**Price: 2,000 ADA**

**Description **Expansion of the Category 4 respondent range from the core commitment of 4 to 6 interviews to 10 to 12 interviews. Additional respondents cover a wider geographic spread including builders in Nairobi, Accra, and Cape Town, and a broader range of alternative chains including Sui, Aptos, and Cosmos IBC ecosystem builders active in African markets.

**Decision Value **Strengthens the external validation base and reduces the risk that negative-case findings reflect Lagos-specific conditions rather than Africa-wide patterns. This stretch item is particularly valuable for upgrading applicant-supplied conflicted evidence classifications from low to medium confidence where multiple independent respondents corroborate the same capability gap or value-flow finding. Increases confidence levels for negative-case classifications from medium to high where multiple independent respondents corroborate the same finding.

**Additional Deliverable**

Extended Negative-Case Evidence Supplement integrated into the Negative-Case and Non-Cardano Evidence Summary.

**S4: Wallet and UX Dependency Assessment**

**Price: 2,500 ADA**

**Description **Dedicated assessment of where wallet friction and UX dependency directly block interoperability adoption in the African informal economy context. Adds a structured wallet UX assessment covering the gap between current Cardano wallet capabilities and what African informal economy users require, including feature-phone compatibility, USSD access, low-data UX requirements, and local language support.

**Decision Value **Addresses the RFP's explicit nice-to-have of wallet and UX dependency assessment where it directly affects interoperability adoption. Provides the CPC with actionable wallet-specific findings that can be routed to the wallets workstream with sufficient detail for immediate follow-up.

**Additional Deliverable**

Wallet and UX Dependency Assessment as a standalone supplement to the Interoperability Requirements Register.

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 50

**S5: Expanded Technical Feasibility Review**

**Price: 2,000 ADA**

**Description **Extension of Samir Idris's technical review scope beyond the core commitment of VAL-003 and VAL-006 findings to cover a broader set of infrastructure provider claims identified during primary research, including technical feasibility review of up to five additional provider or pathway claims.

**Decision Value **Lifts the confidence level of additional provider-side findings from medium to high where external technical validation is possible. Particularly valuable if the screening phase identifies technically complex bridge corridor or partner-chain candidates whose claims require independent technical scrutiny.

**Additional Deliverable**

Extended Technical Review Notes integrated into the Research Methodology Appendix and referenced in the relevant deliverables.

**S6: Public Workshop or Ecosystem Briefing**

**Price: 1,500 ADA**

**Description **One structured public session presenting the research findings to the African Cardano builder community following final CPC approval of the public summary. Hosted online and open to builders, operators, and community members across the African ecosystem.

**Decision Value **Extends the reach of the research findings beyond the CPC to the builder community most likely to act on them. Creates a direct feedback loop between the research outputs and the population the research was designed to serve.

**Additional Deliverable**

Public Workshop Recording and Summary Note published alongside the Public Summary.

**S7: Reusable Annual Refresh Model**

**Price: 3,000 ADA**

**NexTrium Global Innovations Ltd RFP 07: L2 Adoption and Interoperability Demand Study**

Confidential — Submitted to Cardano Product Committee / Intersect Page 51

**Description **A lightweight methodology and template package enabling the CPC or a future research vendor to conduct an annual refresh of the L2 and interoperability demand and value-flow assessment without commissioning a full research engagement from scratch. Includes a streamlined interview guide, updated screening criteria checklist, value-flow reclassification template, evidence confidence update protocol, and changelog format.

**Decision Value **The only stretch item that creates compounding value beyond this research cycle. Consistent with the CPC's Strategy 2030 orientation, an annual refresh model ensures that demand map, barrier analysis, and value-flow classifications remain current as Cardano's infrastructure evolves. Reduces the cost of future research cycles.

**Additional Deliverable**

Annual Refresh Methodology and Template Package as a standalone document delivered alongside the Final Research Report.

**Stretch Scope Summary**

**Item Description ADA**

S1 Deeper peer ecosystem benchmarking 3,000

S2 Deeper bridge corridor and partner-chain analysis 2,500

S3 Additional non-Cardano and negative-case interviews 2,000

S4 Wallet and UX dependency assessment 2,500

S5 Expanded technical feasibility review 2,000

S6 Public workshop or ecosystem briefing 1,500

S7 Reusable annual refresh model 3,000

Total optional stretch

16,500

*All stretch items are optional additions commissioned entirely at CPC discretion. The core research commitment of 25,000 ADA and all sixteen required deliverables remain fixed and unconditional regardless of which stretch items, if any, are selected. If all stretch items are commissioned, the total project budget would be 41,500 ADA, representing approximately 11.1 percent of the total RFP portfolio budget of 373,000 ADA.*

## L2 Adoption and Interoperability Demand in African Emerging Markets: A Builder-Embedded Research Study

| :--- | :--- |
| **Lead Organisation** | NexTrium Global Innovations Ltd, Lagos, Nigeria |
| **Primary Contact** | Abdulbasit Adigun Abdulrahman |
| **Email** | abdulbasit@nextrium.org |
| **Website** | https://nextrium.org |
| **Zivana Protocol** | https://zivana.network |
| **RFP Number** | RFP 07 |
| **Scope** | Single Research Initiative |
| **Submission Date** | May 2026 |
| **Submission Deadline** | 3 June 2026, 12PM UTC |

> **Conflicts of Interest Declaration:** Abdulbasit Adigun Abdulrahman is the founder of NexTrium Global Innovations Ltd and lead contributor to Zivana Protocol, which is referenced as a primary evidence case within this research. This is declared as a potential conflict of interest and is managed through the controls described in Section 11. Samir Idris is a newly elected member of the Cardano Product Committee. This is declared and managed as described in Section 11. No additional conflicts are declared by named team members at the time of submission.


# TABLE OF CONTENTS

| Section | Title |
| :--- | :--- |
| Section 1 | Cover Letter |
| Section 2 | Understanding of the Brief |
| Section 3 | Proposed Methodology |
| Section 4 | Decision Gate Mapping |
| Section 5 | Stakeholder Access Plan |
| Section 6 | Value-Flow Assessment Plan |
| Section 7 | Team Qualifications |
| Section 8 | Workplan and Timeline |
| Section 9 | Risk and Bias Mitigation |
| Section 10 | Budget Breakdown |
| Section 11 | Conflicts of Interest Declaration |
| Section 12 | Ethics and Data Handling Statement |
| Section 13 | Deliverables Plan |
| Section 14 | Optional Stretch Scope |


# SECTION 1: COVER LETTER

**To:** Cardano Product Committee / Intersect
**From:** NexTrium Global Innovations Ltd
**Re:** Product Research Grants — RFP 07: L2 Adoption and Interoperability Demand Study
**Date:** May 2026

The Cardano Product Committee has correctly identified that the ecosystem lacks a decision-ready map of what is actually blocking L2 deployment and which interoperability pathways create Cardano-side value. NexTrium Global Innovations Ltd submits this proposal to close that evidence gap from the perspective of builders who are operating within it.

NexTrium is the development entity behind Zivana Protocol, an open Layer 2 trust infrastructure protocol being built on Cardano and Midnight for the African informal economy. Over the past several months, we have validated five primitives against Cardano's current infrastructure stack, covering identity, distribution, trust, oracle, and intelligence layers. That work has produced precise technical documentation of where deployment proceeds, where it stalls, and where may route off Cardano due to missing last-mile capability. This validation work is not background context for this proposal. It is the first evidence deposit the research will build from.

Our differentiated contribution to RFP 07 is threefold. First, we brought documented, reproducible builder evidence of L2 and interoperability blockers grounded in engineering-level diagnostics with named failure modes and workaround decisions already made during active protocol validation. Second, we operate within the African informal economy builder ecosystem and have direct access to a demand segment that is structurally underservd and almost entirely absent from existing Cardano infrastructure research. Third, our work architecture has already forced us to answer the question the RFP frames as hardest: when Cardano's infrastructure is insufficient, does value stay in the ecosystem or leave it? During validation of Zivana's distribution primitive, the team made a documented architectural decision to route covenants to Celo MinoPay because Cardano currently lacks an equivalent number-based stablecoin distribution rail. Celo is an Ethereum Layer 2 protocol. This means the absence of a comparable last-mile distribution capability on Cardano is not a neutral gap; it represents a documented architectural decision that, if replicated across the broader builder population, would constitute an active value-leakage pathway. This will be tested and triangulated through primary research as applicant-supplied conflicted evidence, clearly separated from independent operator and provider findings.

This proposal scopes the research tightly around what we can validate with high confidence: African emerging market builders and operators, documented L2 blockers across the Cardano infrastructure stack, and a value-flow assessment grounded in real deployment








flow of value toward larger ecosystems such as Ethereum?

This proposal does not attempt to answer questions for the entire global ecosystem. The scope is the African informal economy builder population, a segment with documented, direct builder, and almost no representation in existing Cardano infrastructure research. The $2.9 trillion global financing gap for MSMEs, the 83 percent informal employment rate across Africa, and the near-total reliance on cash transactions in sub-Saharan Africa provide contextual framing for the scale of the economic context in which this research is situated. Whether Cardano's current and planned infrastructure is positioned to serve that opportunity is an open question. This research will assess the degree to which infrastructure gaps are blocking deployment within the African informal economy builder population studied, and whether those gaps are representative of broader emerging market L2 and interoperability demand.

**Sources:**
- IFC MSME Finance: https://www.ifc.org/en/what-we-do/sector-expertise/financial-institutions/msme-finance
- UN ECA / North Africa Post (2026): https://northafricapost.com/96624-africas-informal-economy-employs-83-of-workforce-in-2024-un-data.html
- World Economic Forum (February 2026): https://www.weforum.org/stories/2026/02/how-technology-can-help-bank-africa-s-informal-economy/


# SECTION 3: PROPOSED METHODOLOGY

This research follows a screening-first, mixed-method design. The approach moves from documented internal evidence through a structured screening phase into targeted primary research with builders, operators, and infrastructure providers across the African ecosystem. Desk research alone is not sufficient for this RFP and this proposal does not rely on it as a primary evidence source.

## Phase 1: Evidence Baseline and Desk Research (Weeks 1 to 2)

The research begins with two parallel workstreams.

The first is the internal evidence baseline. The Zivana Protocol validation stack, spanning VAL-001 through VAL-006, provides the first documented evidence layer. Each validation represents a specific infrastructure test against Cardano's current stack with reproducible outcomes.

- VAL-001 (Aiken Dublin Validator): https://github.com/zivana-labs/zivana-validation/tree/main/aiken-stub
- VAL-002 (Midnight Proof of Threshold): https://github.com/zivana-labs/zivana-validation/tree/main/midnight-threshold
- VAL-003 (Identus Setup): https://github.com/zivana-labs/zivana-validation/tree/main/identus-setup
- VAL-004 (Orcfax Schema): https://github.com/zivana-labs/zivana-validation/tree/main/orcfax-schema
- VAL-005 (Fetch.ai uAgent): https://github.com/zivana-labs/zivana-validation/tree/main/fetch-agent
- VAL-006 (Celo MiniPay): https://github.com/zivana-labs/zivana-validation/tree/main/celo-minipay
- Full Zivana GitHub Repository: https://github.com/zivana-labs

VAL-003 documents a named technical and DX blocker in the Builder Identus Cloud Agent deployment path. This will be documented using the Appendix B barrier taxonomy and routed to the existing developer working taxonomy within the Cross-RFP Handoff Memo. VAL-006 documents a named applicant-supplied architectural decision made during validation: that covenant datastreams would need to route to Celo MiniPay, an Ethereum Layer 2, because Cardano currently lacks an equivalent last-mile payment capability. VAL-001 confirms Cardano's eUTXO settlement layer via Aiken functions correctly for the distribution use case. VAL-002 confirms Midnight's ZK proof infrastructure functions on devnet for privacy-preserving trust scoring. VAL-004 and VAL-005 are functional at the prototype level. All six validation cases are treated as applicant-supplied conflicted evidence throughout this research, clearly separated from independent builder, operator, provider, and external evidence in all analysis and will not be used to establish segment-level demand or value-flow classifications above low confidence without independent triangulation.

These six validation cases form the baseline evidence set. Each will be documented using the Appendix B barrier analysis template and Appendix C demand template before any external research begins. Samir Idris will conduct an independent technical review of the VAL-003 and VAL-006 findings to establish an externally validated confidence level for the


two most critical cases before fieldwork begins.

The second workstream is desk research. Desk research will establish the current L2 and interoperability landscape relevant to the African builder context. This covers public documentation and roadmaps from Cardano L2, partner-chain, bridge, wallet, and interoperability projects; developer documentation and integration friction evidence from Identus, Midcrypt, Orfcjava, and bridge providers; bridge and provider integration requirements documentation; ecosystem grant and funding proposal history from Cardano Catalyst and Intersect where available and relevant; and publicly available on-chain transaction, liquidity, bridge, and wallet data where meaningful. On-chain and product data will be used only where it validates demand or activity directly relevant to the decision gates. Any limitations in on-chain data coverage will be stated explicitly. Proprietary datasets are not planned. The research operations budget includes contingency for paid expert calls if bridge or provider access requires it.

Peer ecosystem benchmarking will be conducted as a core activity where it supports provider and partner recommendations. Because this proposal is a Provider and Partner Opportunity Analysis as a required deliverable, the conditional benchmarking requirement applies. Benchmarking will focus on how ecosystems including Celo, Stellar, and Polygon convert L2 and interoperability into adoption in African and emerging markets. Deeper benchmarking across a wider set of ecosystems is available as optional stretch scope in Section 14.

## Phase 2: Screening (Weeks 2 to 3)

Before any deep-dive interviews, the research team will screen candidate use cases, interoperability pathways, and potential respondents against the following criteria: claimed blocker, affected application or workflow, current workaround, evidence of demand, Cardano-side value, dependency risk, respondent access, decision value of deeper research, and relevance to Cardano 2030 adoption goals.

The screening phase will produce a shortlist of use cases and pathways that justify primary research depth, and a documented rationale for exclusions. This prevents the research from expanding into a general ecosystem survey and keeps every interview focused on answerable decision gates.

Interoperability pathways screened will include all pathways the RFP specifies: bridge corridors, cross-chain messaging paths, partner-chain integrations, wallet and user-flow integrations, liquidity routing paths, asset transfer mechanisms, identity and data portability mechanisms, and other cross-chain mechanisms identified during desk research. Wallet pathways and messaging pathways are explicitly included in the screening scope alongside bridge and partner-chain pathways.

Yuguda Muhammad will lead respondent mapping and recruiting during this phase, drawing on NexTrium's existing networks across the African Cardano ecosystem.

## Phase 3: Primary Research (Weeks 3 to 7)


Primary research is conducted across four respondent categories detailed in Section 5. The total target interview range is 30 to 44 respondents. This comprises 15 to 20 builder and operator interviews in Category 1, 6 to 10 infrastructure and tooling provider interviews in Category 2, 5 to 8 interoperability provider interviews in Category 3, and 4 to 6 non-Cardano and negative-case interviews in Category 4.

All interviews will be conducted with informed consent, clear disclosure of purpose and audience. Raw notes will be stored securely and will not be published. Findings will distinguish named evidence, confidential evidence, and anonymised theories throughout.

The research will test, refine, or reject the following seven core hypotheses: (1) Some Cardano applications are genuinely blocked by missing L2 capacity. (2) L2 demand is not uniform across use cases. (3) Some apparent L2 blockers are actually non-L2 blockers caused by liquidity, wallets, bridge or provider access, tooling, commercial uncertainty, compliance, partner access, or user demand. (4) Interoperability demand is feature-specific, covering asset bridging, message passing, liquidity routing, partner-chain integration, wallet UX, identity and data portability, and settlement interoperability. (5) Interoperability pathways differ in Cardano-side value. (6) Bridge and interoperability providers have identifiable reasons for not prioritising Cardano. (7) A reusable evidence standard can improve future funding decisions.

## Phase 4: Analysis and Classification (Weeks 7 to 9)

Interview findings will be analysed against the RFP's decision gates. Before any blocker is recorded in the L2 Barrier Analysis, it must pass a relevance test confirming it directly blocks a specific L2 or interoperability workflow. General infrastructure complaints or ecosystem observations that do not tie to a named L2 or interoperability use case will not be classified as L2 blockers and will be routed to the appropriate adjacent workstream via the Cross-RFP Handoff Memo. Each blocker that passes the relevance test will be classified using the Appendix B taxonomy across eight dimensions: type, severity, adoption impact, urgency, owner or workstream, evidence confidence, affected use case, and enterprise usage. Blocker types covered are technical, commercial, ecosystem, liquidity, UX, tooling, coordination, compliance, and unknown. Ecosystem blockers are distinct from tooling blockers and include missing wallet support, insufficient developer community presence, and weak business development coverage.

Each blocker will be assigned a recommended action from the following set: fund engineering, improve documentation, purse wallet support, establish bridge or provider partnerships, coordinate liquidity, provide commercial incentives, activate builders, or reject.

All demand estimates will be presented as indicative ranges with stated assumptions and confidence ratings. The research will not produce precise market sizing or adoption forecasts where the evidence does not support that precision. Demand map entries will include all nine required dimensions from the Appendix C template. Interoperability requirements entries will include all eight required dimensions from the Appendix D template including adoption consequence.





# SECTION 4: DECISION GATE MAPPING

The RFP requires that every method and deliverable maps directly to its decision gates. The following maps how NexTrium's methodology answers each gate, what evidence type is used, and which deliverable carries the findings.

| :--- | :--- |
| **Decision Gate** | Gate 1: Which applications or use cases are actually blocked by missing L2 capability? |
| **Method** | Builder and operator interviews cross-referenced against VAL-001 through VAL-006 baseline evidence. Findings triangulated across at least two evidence types. |
| **Evidence Type** | Named application evidence, deployment blocker documentation, workaround analysis, internal validation cases with external technical review. |
| **Deliverable** | Blocked-Demand Case Register, L2 Demand Map. |
| **Starting Evidence** | VAL-003 Identus failure and VAL-006 Celo MiniPay architectural decision serve as applicant-supplied conflicting starting evidence, clearly separated from independent demand evidence throughout the research. Minimum 8 to 15 documented cases committed across named, confidential, and anonymised categories. |
| **Decision Gate** | Gate 2: What type of L2 capability would unlock the most immediate adoption value? |
| **Method** | Ranked requirements across throughput, latency, cost, privacy, state management, composability, developer tooling, UX, settlement, and integration burden. |
| **Evidence Type** | Requirements register from operator interviews cross-referenced against internal validation and infrastructure provider interviews. |
| **Deliverable** | Interoperability Requirements Register, L2 Barrier Analysis. |
| **Starting Evidence** | VAL-002 Midnight ZK privacy functional. VAL-003 Id


| :--- | :--- |
| **Method** | Barrier classification using full Appendix B taxonomy across eight dimensions. Action categories: fund engineering, improve documentation, pursue wallet support, establish bridge or provider partnerships, coordinate liquidity, provide commercial incentives, activate builders, or reject. |
| **Evidence Type** | Builder interviews, infrastructure provider interviews, internal validation diagnostics, technical review by Samir Idris. |
| **Deliverable** | L2 Barrier Analysis, Technical and Commercial Blocker Taxonomy. |
| **Starting Evidence** | VAL-003: technical plus DX, action improve documentation and coordination. VAL-006: missing ecosystem capability, action fund engineering or partner. |

| :--- | :--- |
| **Decision Gate** | Gate 4: Which applications waiting on L2 represent meaningful demand at scale? |
| **Method** | Demand mapping with all nine required dimensions including deployment condition, expected adoption pathway, and timing assumptions. Scale estimates as indicative ranges with stated assumptions. |
| **Evidence Type** | Builder interviews, on-chain data where available with stated limitations, non-Cardano comparisons, IFC and WEF data as contextual framing only. |
| **Deliverable** | L2 Demand Map. |
| **Starting Evidence** | Zivana Sovela application and Balogun Market operator network as baseline demand cases. |

| :--- | :--- |
| **Decision Gate** | Gate 5: What interoperability features do builders and operators actually need? |
| **Method** | Requirements register across all eight dimensions including adoption consequence. Feature types tested: asset bridging, message passing, liquidity routing, partner-chain integration, wallet UX, and data portability, settlement interoperability. |
| **Evidence Type** | Operator interviews, bridge and provider interviews, internal validation findings from VAL-005 and VAL-006. |
| **Deliverable** | Interoperability Requirements Register. |


| :--- | :--- |
| **Starting Evidence** | VAL-006: phone-number-based stablecoin rail needed. VAL-005: Fetch.ai intelligence layer functional. |
| **Decision Gate** | Gate 6: Which interoperability pathways are net-positive for Cardano? |
| **Method** | Value-flow assessment using five-category framework. All six elements stated for every pathway: expected inflows (users, liquidity, applications, transactions, partner access), potential outflows, retention mechanism, dependency risk, and confidence. Classifications are demand assessments, not architecture recommendations. |
| **Evidence Type** | Provider interviews, builder interviews, internal validation findings, negative-case respondent data. |
| **Deliverable** | Interoperability Value-Flow Assessment. |
| **Starting Evidence** | Midnight: value-accretive (low confidence, applicant-supplied). Orcfax: mutual-value (low confidence, applicant-supplied). Fetch.ai: neutral-access (low confidence, applicant-supplied). Celo MiniPay: dependency-risk to value-leakage risk (low confidence, applicant-supplied conflicted evidence, pending triangulation with independent builders, providers, public data, or negative-case evidence). Idento: pending Phase 1 technical review. |
| **Decision Gate** | Gate 7: Which interoperability pathways create asymmetric dependency or value-leakage risk? |
| **Method** | Analysis of value direction across each pathway. Bridge volume data used only where source, destination, and retention analysis accompanies it. |
| **Evidence Type** | Internal validation findings, provider interviews, non-Cardano builder interviews, on-chain data with stated limitations. |
| **Deliverable** | Interoperability Value-Flow Assessment, Negative-Case and Non-Cardano Evidence Summary. |
| **Starting Evidence** | NexTrium's VAL-006 architectural decision represents applicant-supplied conflicted evidence of a potential value-leakage pathway. This will be tested through primary research with independent builders and providers before any confirmed classification is assigned. |


| :--- | :--- |
| **Decision Gate** | Gate 8: Which bridge, partner-chain, or cross-chain partners should Cardano prioritise? |
| **Method** | Provider and partner opportunity analysis across all nine Appendix F dimensions including commercial incentive and technical effort. Recommended actions: fund now, coordinate, partner, monitor, defer, or reject. Supported by peer ecosystem benchmarking. |
| **Evidence Type** | Provider interviews, builder interviews, internal validation findings, public documentation review. |
| **Deliverable** | Provider and Partner Opportunity Analysis. |
| **Starting Evidence** | Named provider shortlist in Section 5 including Wanchain, Milkomeda, Rosen Bridge, XDAO. |
| **Decision Gate** | Gate 9: What is preventing bridge and interoperability providers from prioritising Cardano? |
| **Method** | Direct provider interviews testing whether blockers are demand, integration cost, technical complexity, liquidity, security risk, incentive misalignment, commercial opportunity cost, or lack of ecosystem support. |
| **Evidence Type** | Provider interviews, negative-case respondent data, public integration requirement documentation. |
| **Deliverable** | Provider and Partner Opportunity Analysis, Negative-Case and Non-Cardano Evidence Summary. |
| **Starting Evidence** | None. This gate requires primary research. No assumptions made. |
| **Decision Gate** | Gate 10: What evidence should be required before funding L2 or interoperability proposals? |
| **Method** | Evidence threshold framework across five dimensions: demand evidence, blocker severity, value-flow benefit, adoption pathway, and measurable outcomes. Scoped to L2 and interoperability proposals specifically. Does not extend into broader ecosystem funding mechanism design. |
| **Evidence Type** | Synthesised from all research phases. |
| **Deliverable** | Evidence Threshold Framework using Appendix G template. |





# SECTION 5: STAKEHOLDER ACCESS PLAN

A research proposal is only as strong as its access to real respondents. This section documents how NexTrium can reach, why those respondents are relevant, how they map to the use cases and pathways identified in the screening phase, and how insider bias and provider self-interest will be controlled.

## Team and Access Roles

| :--- | :--- |
| **Abdulbasit Adiguin Abdulrahman** | Lead Researcher. Owns research design, all interviews, analysis, and deliverables. Builder credibility enables access to African Web3 respondents unfamiliar to external firms. |
| **Yuguda Muhammad** | Research Coordinator. Owns respondent mapping, scheduling, note-taking, and data management across all four milestones. |
| **Samir Idris** | Technical Advisor. Owns independent technical validation of VAL-003 and VAL-006 findings and review of provider claims during analysis phase. |

## Respondent to Use Case and Pathway Mapping

Each respondent category maps directly to specific use cases and interoperability pathways identified during the screening phase. Category 1 respondents map to blocked-demand cases in the African informal economy, specifically identity-dependent applications, covenant distribution workflows, trust scoring use cases, and oracle-attested economic activity. Category 2 respondents map to the infrastructure pathways underlying those use cases. Category 3 respondents map to the interoperability pathways screened for value-flow classification, covering bridge corridors, wallet integrations, messaging paths, and liquidity routing. Category 4 respondents map to the negative-case evidence base, providing external reference points for what deployment decisions look like when Cardano's infrastructure is not chosen.

## Respondent Category 1: African Informal Economy Builders and Operators on Cardano

**Target range: 15 to 20 interviews.**

| Respondent | Type | Access Pathway | Relevance |
| :--- | :--- | :--- | :--- |
| Zivana Protocol / NexTrium | Lead builder | Internal | Applicant-supplied conflicted evidence. Findings treated separately from all independent evidence throughout and not used to establish segment-level demand without triangulation. |


NexTrium Global Innovations Ltd | RFP: L2 Adoption and Interoperability Demand Study

| Respondent | Type | Access Pathway | Relevance |
| :--- | :--- | :--- | :--- |
| WADA community builders | Builder network | Direct — WADA relationship | African Cardano application builders |
| African Cardano Catalyst funded teams | Builder network | Direct — Catalyst community | Teams with deployment experience |
| UCSC Nigeria alumni network | Student builders | Direct — Abdulbasit former VP | Early-stage Lagos builders |
| UNILAG Web3 mentorship alumni | Student builders | Direct — UNILAG mentorship | Lagos-based builders |
| Balogun Market operator network | Informal economy operators | Direct — Sovela planned Market Reporter Network outreach infrastructure, currently in development | End-user population, demand evidence source |
| Web3Bridge Africa | Developer training org | Community — Lagos Web3 | Cross-chain exposure including Lisk |

## Respondent Category 2: Infrastructure, Tooling, and Identity Providers
**Target range: 6 to 10 interviews.**

| Respondent | Type | Access Pathway | Relevance |
| :--- | :--- | :--- | :--- |
| Hyperledger Identus maintainer community | Identity infrastructure | Direct — VAL-003 diagnostic work | VAL-003 blocker resolution pathway |
| Midnight Network developer community | ZK privacy infrastructure | Direct — VAL-002 devnet | Partner chain, value-accretive |
| Orcfax | Oracle infrastructure | Direct — VAL-004 schema work | Oracle layer, mutual-value |
| Fetch.ai / Agentverse community | Intelligence infrastructure | Direct — VAL-005 deployment | Intelligence layer, neutral-access |
| Input Output / IOG infrastructure teams | Core Cardano infrastructure | Ecosystem — Cardano Intersect | L2 roadmap assumptions |
| Charli3 | Oracle infrastructure | Ecosystem — Cardano community | Secondary oracle provider |

## Respondent Category 3: Bridge, Interoperability, and Wallet Providers
**Target range: 5 to 8 interviews.**


| Respondent | Type | Access Pathway | Starting Classification |
| :--- | :--- | :--- | :--- |
| Wanchain | Decentralised bridge | Structured outreach | Neutral-access to dependency-risk |
| Milkomeda | EVM sidechain and bridge | Structured outreach | Mutual-value to neutral-access |
| Rosen Bridge | UTXO-native bridge | Structured outreach | Neutral-access |
| Celo / MiniPay team | Ethereum L2, stablecoin rail | Active — VAL-006 work | Dependency-risk to value-leakage risk |
| XDAO | DAO tooling provider | Direct — existing relationship | Not yet classified |
| Swifin or Reltime | Cross-border payment platform | Structured outreach | Dependency-risk |

## Respondent Category 4: Non-Cardano Builders and Negative-Case Respondents
**Target range: 4 to 6 interviews.**

| Respondent | Type | Access Pathway | Relevance |
| :--- | :--- | :--- | :--- |
| Celo ecosystem builders | Alternative chain builders | Direct — VAL-006 community | Chose Celo for last-mile payments |
| Stellar / Soroban builders | Alternative chain builders | Community — African fintech | Stellar for African remittance |
| Polygon builders in Africa | Alternative chain builders | Community — Lagos Web3 | Chose Polygon for DeFi or identity |
| XDAO team | DAO tooling non-Cardano | Direct — existing relationship | Has not prioritised Cardano |
| Web3Bridge Africa Risk builders | Alternative chain builders | Community — Web3Bridge | Chose Lisk over Cardano |

## Recruitment and Consent Protocol
All respondents will be contacted with a clear description of the research purpose, the commissioning body, and that their input may be used. Respondents will be offered the choice of anonymised attribution, anonymised attribution, or fully confidential treatment before the interview begins. No respondent will be recorded without explicit consent. Raw notes will be stored securely by Yuguda Muhammad and will not be shared outside the research team without the respondent's permission.

## Access Limitations and Honest Disclosure


NexTrium acknowledges two access limitations. First, the bridge, interoperability, and provider category is weakest in terms of existing relationships. If outreach does not yield the target range, this will be disclosed at the Stakeholder Access Check milestone and confidence levels adjusted accordingly. Second, the total respondent range of 30 to 44 is below the RFP's suggested upper range. This is a deliberate scope decision. The African informal economy represents precisely the kind of net-new user and application population the RFP identifies as the hardest question to answer, and a tightly scoped study of this segment produces stronger evidence on that question than a broader study that treats it as one data point among many. This is consistent with the RFP's own guidance that a narrower proposal with credible respondent access and strong decision value may be stronger than a broad proposal covering many pathways superficially. The limitations of this narrower scope should be acknowledged explicitly. Findings will be most confident for the Lagos and Nigerian informal economy builder population and may not fully represent L2 and interoperability demand patterns across East African, Francophone African, or Southern African markets. Respondent access for bridge and wallet provider categories may be insufficient to produce high-confidence provider-side classifications without the expanded outreach available under the stretch scope items in Section 14. These limitations will be stated explicitly in the Research Methodology Appendix and the public summary.





| :--- | :--- |
| **Dependency Risk** | Low. The dependency runs towards Cardano rather than away from it. |
| **Evidence** | VAL-002 confirms ZK proof infrastructure functions on devnet for trust scoring use case. |
| **Confidence Level** | Low confidence as applicant-supplied evidence. Upgradeable to medium confidence following independent Midnight developer community interview validation. |

## Orcfax Oracle Integration
| Classification: Preliminary: Mutual-Value | |
| :--- | :--- |
| **Expected Inflows** | Verified economic activity data consumable by Cardano smart contracts. Revenue attestation for informal economy operators creates new application possibilities on Cardano. |
| **Potential Outflows** | Minimal. Oracle data is published to Cardano, not away from it. |
| **Retention Mechanism** | Orcfax's value proposition depends on Cardano smart contract consumption. |
| **Dependency Risk** | Low. No user or liquidity routing away from Cardano. |
| **Evidence** | VAL-004 confirms Orcfax revenue event fact statements publishable to testnet and queryable via Lucid on Cardano preprod. |
| **Confidence Level** | Low confidence as applicant-supplied evidence. Upgradeable to medium confidence following independent Orcfax interview validation. |

## Fetch.ai and ASI Cloud for Intelligence
|





| **Confidence Level** | Low. Classification assigned following Phase 1 technical review and Identus maintainer community interview. |
| :--- | :--- |

## Classification Process and Confidence Labelling

Each pathway classification will state the preliminary classification at low confidence as applicant-supplied evidence, test it through primary research, and produce a final classification with evidence basis, confidence level, dissenting evidence, and recommended action (fund now, coordinate, partner, monitor, defer, or reject). These six pathway-level actions apply to interoperability pathway recommendations. The eight blocker-level action categories described in Section 9, covering fund engineering, improve documentation, pursue wallet support, establish bridge or provider partnerships, coordinate liquidity, provide commercial incentives, activate builders, and reject, apply specifically to barrier classifications in the L2 Barrier Analysis. Where triangulation across multiple evidence types is possible, confidence will be raised from low to medium or high. No classification will be presented without a stated confidence level and evidence source. Forward-looking statements will be framed as evidence-based sequencing recommendations, not technical roadmap prescriptions.





scheduling and logistics, structured note-taking and transcript organisation during sessions, data filing and version-controlled documentation management, and coordination of the research timeline across all four milestones.

He holds a BSc in Physics from Ahmadu Bello University and brings a combination of technical systems thinking, structured documentation practice, and cross-functional coordination experience directly applicable to this research.

At Adept Engineering Solutions, he produced comprehensive technical documentation of pipeline methodology, data schemas, and retrieval architecture for cross-team engineering review. He built and maintained compliance automation services tracking submission requirements, structural conformance, and content compliance across live federal solicitation documents, establishing fluency in structured checklist management, requirement traceability, and gap identification that maps directly onto the data organisation demands of this research.

He designed and operated output quality scoring systems at Adept, improving measured output quality scores from 30 percent to over 90 percent through iterative evaluation and refinement. His parallel work in LLM evaluation and annotation at Turing involved systematic written assessment of model outputs across large volumes of structured data with documented findings submitted against strict quality and schema standards.

| :--- | :--- |
| **LinkedIn:** | https://linkedin.com/in/yuguda |
| **GitHub:** | https://github.com/yuguda999 |

## Samir Idris — Technical Advisor

Samir is a newly elected member of the Cardano Product Committee through the most recent Intersect election. He is an active Cardano builder with a track record of shipping production-level systems across multiple mainnet protocols including Minswap, FluidTokens, Metera, and Statera.

His technical work spans on-chain smart contract development using Aiken, covering lending protocols, DEX components, and batching and order-processing systems within the eUTXO model, and off-chain transaction construction using TypeScript with MeshJS and Lucid Evolution. He designed and implemented the complete smart contract system for Statera, a zero-interest lending and borrowing protocol on Cardano, and contributed to optimised core contract flows at Minswap including CIP-113 based implementation shipped to mainnet.

His CPC membership means he brings direct institutional familiarity with the decision context this research serves. His builder background means he can assess technical blocker claims against the reality of what shipping on Cardano's mainnet actually requires.

Within this project, Samir's mandate is to two tasks: independent technical review of VAL-003 and VAL-006 findings before primary fieldwork, and technical review of infrastructure provider claims during the analysis phase. His technical review of VAL-003 and VAL-006 in Milestone 1 serves specifically to assess whether these applicant-supplied


findings represent reproducible and inspectable evidence that can be elevated from applicant-supplied conflicted evidence toward independently validated evidence. His CPC membership is declared as a potential conflict of and is managed as described in Section 11.

**Linktree:** https://linktr.ee/scisamir

## Team Structure and Scope Boundaries

The three-person team is structured around a clear division of responsibilities. The lead researcher owns research design, interview conduct, analysis, and all deliverables. The research coordinator owns respondent access, logistics, and data management. The technical advisor owns technical validation of specific findings and is not responsible for research design or deliverable production. This structure is lean by design, consistent with the tightly defined research scope and the cost efficiency commitment of this proposal.





**Activities:** All blockers classified across eight dimensions using full Appendix B taxonomy. Final value-flow classifications produced for all screened pathways with all six elements stated systematically. Requirements register compiled. Provider and partner opportunity analysis produced. All confidence levels applied with triangulation noted. Interim findings review and draft deliverables review completed with CPC.

**Key Outputs:** Draft L2 Barrier Analysis, Draft L2 Demand Map, Draft Value-Flow Assessment, Draft Provider Analysis, Draft Investment Sequencing, Draft Evidence Threshold Framework, Draft Cross-RFP Handoff Memo, Draft Executive Decision Memo.

| M4: Final Deliverables and Publication | Dates: 7 September — 11 September 2026 |
| :--- | :--- |
| **Activities:** | CPC feedback incorporated from M3 draft review. All deliverables finalised. Final presentation delivered to CPC on 8 September 20    September 2026. Public summary reviewed with CPC on 10 September 2026 and published following approval. The M4 payment of 20 percent reflects that the bulk of analytical work is completed and accepted in M3. M4 covers final refinement, presentation delivery, and public summary publication. |
| **Key Outputs:** | Final Research Report, Final Presentation (8 September), Public Summary (post-CPC approval), all supporting deliverables in final form. |

## Detailed Weekly Workplan

| Period | Dates | Phase | CPC Checkpoint |
| :--- | :--- | :--- | :--- |
| Week 1 | 22—26 Jun | Kickoff and Alignment | Kickoff Meeting — 23 Jun |
| Weeks 1—2 | 22 Jun—3 Jul | Evidence Baseline, Desk Research, Research Design | Research Design Review — 3 Jul |
| Weeks 2—3 | 29 Jun—10 Jul | Screening Phase | Screening Review and Stakeholder Access Check — 10 Jul |
| Weeks 3—5 | 6 Jul—24 Jul | Builder and Operator Interviews | Early Demand Signal Review — 24 Jul |
| Weeks 4—6 | 13 Jul—31 Jul | Infrastructure, Bridge, and Provider Interviews | None scheduled |


| Period | Dates | Phase | CPC Checkpoint |
| :--- | :--- | :--- | :--- |
| Weeks 5—7 | 20 Jul—7 Aug | Non-Cardino and Negative-Case Interviews | None scheduled |
| Weeks 7—9 | 3 Aug—21 Aug | Analysis and Classification | Interim Findings Review — 13 Aug |
| Weeks 9—11 | 17 Aug—4 Sep | Deliverable Production | Draft Deliverables Review — 28 Aug |
| Week 12 | 7—11 Sep | Final Report and Public Summary | Final Presentation — 8 Sep; Public Summary Review — 10 Sep |

Note: M2 dates of 6 July to 7 August 2026 encompass all three overlapping primary research phases running in parallel. The overlap is intentional and builds resilience into the interview schedule.


# SECTION 9: RISK AND BIAS MITIGATION

The RFP requires a research integrity plan. This section maps each risk to a named control, explains how NexTrium will implement it, and acknowledges residual risk.

## Risk 1: Cardano Insider Bias

| :--- | :--- |
| **Description** | NexT $rium$ is a Cardano builder with a direct interest in Cardano's infrastructure improving. |
| **Control** | Four controls: (1) Non-Cardano and negative-case respondents required, not optional, presented without positive filtering. (2) All major findings distinguish Cardano-insider from external evidence explicitly. All evidence derived from NexTrium's own validation work is treated as applicant-supplied conflicted evidence throughout the research, clearly separated from independent operator, provider, and external evidence in all analysis and deliverables. (3) Samir Idris technical review tests whether blocker classifications reflect general ecosystem reality not just Zivana's architecture, and specifically assesses whether applicant-supplied VAL findings can be elevated independently validated evidence. (4) Conflicts declaration in Section 11 discloses the lead researcher's position. |
| **Residual Risk** | Low to medium. The negative-case respondent category is the primary structural safeguard. |

## Risk 2: Technical Roadmap Bias

| :--- | :--- |
| **Description** | Risk that research frames blockers in terms of what Zivana needs rather than what the broader builder population needs. |
| **Control** | All roadmap assumptions tested against builder and operator interview evidence before presentation as findings. Samir Idris flags any finding where blocker $blocker$ classification reflects Zivana-specific constraints rather than broadly shared barriers. All forward-looking recommendations framed as evidence-based sequencing recommendations, not roadmap prescriptions. |
| **Residual Risk** | Low. The screening phase surfaces use cases beyond Zivana's own architecture. |

## Risk 3: Provider Self-Interest


NexTrium Global Innovations Ltd | RFP: L2 Adoption and Interoperability Demand Study

| :--- | :--- |
| **Description** | Infrastructure and bridge providers have incentives to present their roadmap positively and overstate integration value. |
| **Control** | Evidence from providers seeking funding or support labelled accordingly and treated as separate from independent demand evidence. Provider claims cross-referenced against builder-side evidence and public documentation. Samir Idris reviews technically complex provider claims. Provider interviews specifically test whether blockers are demand, integration cost, technical complexity, liquidity, security risk, incentive misalignment, commercial opportunity cost, or lack of ecosystem support. |
| **Residual Risk** | Medium. The confidence labelling system is the primary mitigation. |

## Risk 4: False L2 Demand

| :--- | :--- |
| **Description** | Builders may claim L2 dependency for applications where the actual blocker is liquidity, wallets, integrations, tooling, commercial uncertainty, compliance, partner access, or user demand. |
| **Control** | Every demand claim requires identification of a specific blocked workflow and a specific deployment decision pending resolution. Every blocker claim will be tested against the relevant L2 or interoperability requirement confirming the blocker directly ties to a named L2 or interoperability use case, not a general infrastructure observation. The seven non-L2 blocker types tested explicitly are: liquidity gaps, wallet support gaps, bridge or provider access gaps, tooling failures, commercial uncertainty, compliance constraints, partner access barriers, and user demand shortfalls. |
| **Residual Risk** | Low. The RFP's own definitions of blocked demand and cosmetic signal are adopted as the evidence standard. |

## Risk 5: Misclassified Blockers

| :--- | :--- |
| **Description** | A technical blocker may actually be a documentation failure, DX gap, ecosystem problem, or commercial uncertainty. |
| **Control** | Full Appendix B taxonomy separates nine blocker types: technical, commercial, ecosystem, liquidity, UX, tooling, coordination, compliance, and unknown. Ecosystem blockers treated as *distinct* from tooling blockers. Every blocker assigned a recommended action from the full set including reject. |
| **Residual Risk** | Low to medium. Ambiguous blockers classified as unknown with explicit explanation. |

Confidential — Submitted to Cardano Product Committee / Intersect


## Risk 6: Interoperability Optimism Bias

| :--- | :--- |
| **Description** | General tendency to treat interoperability as automatically positive. |
| **Control** | Celo MiniPay pre-classified as dependency-risk to value-leakage risk demonstrates willingness to document unfavourable findings. Value-flow assessment requires evidence of retention mechanics before positive classification. The full range of interoperability feature types tested explicitly during interviews. |
| **Residual Risk** | Low. Pre-classification of own distribution infrastructure as value-leakage risk signals this control is applied in good faith. |

## Risk 7: False Precision

| :--- | :--- |
| **Description** | Demand estimates presented with more precision than evidence supports. |
| **Control** | All scale estimates presented as indicative ranges with stated assumptions and confidence levels. IFC and WEF figures used as contextual framing only, not as demand evidence for Cardano adoption specifically. Bridge volume data used only where source, destination, and retention analysis accompanies it. |
| **Residual Risk** | Low. |

## Risk 8: Weak Respondent Access

| :--- | :--- |
| **Description** | Bridge and provider outreach may not yield sufficient responses. |
| **Control** | Risk disclosed proactively. If outreach does not yield target range by end of screening phase, reported to CPC at Stakeholder Access Check. Confidence levels for provider-side findings adjusted accordingly. |
| **Residual Risk** | Medium. Most honest residual risk in this proposal. |

## Risk 9: Scope Creep

| :--- | :--- |
| **Description** | Findings in adjacent areas may expand scope beyond what the team can deliver. |
| **Control** | Cross-RFP Handoff Memo routes all adjacent findings rather than absorbing them. Liquidity incentive design, technical roadmap authorship, bridge implementation, and L2 protocol design explicitly outside scope. |


| :--- | :--- |
| **Residual Risk** | Low. |
| **Risk 10: Confidentiality Reducing Public Usefulness** | |
| **Description** | Excessive confidentiality may make the public summary too vague to be useful. |
| **Control** | Default approach publishes findings at theme and category level rather than named-respondent level. Named evidence withheld only where respondent requests confidentiality or where publication creates commercial, security, or competitive risk. |
| **Residual Risk** | Low. |


# SECTION 10: BUDGET BREAKDOWN

**Total Proposed Budget: 25,000 ADA**

### Market Rate Benchmarks

The following verified market rates are used as reference benchmarks for individual compensation in this proposal. The average hourly pay for a blockchain consultant in the United States is approximately $49.72, with senior blockchain consultants averaging $71 per hour and top earners reaching $99 per hour (ZipRecruiter, Glassdoor 2025/2026). In the United Kingdom, market research freelancers averaged $61 per hour in 2024 with top-tier researchers averaging $98 per hour (YunoJuno





| Milestone | Name | Dates | Key Outputs | Payment on Acceptance |
| :--- | :--- | :--- | :--- | :--- |
| M2 | Primary Research | 6 Jul — 7 Aug 2026 | All interviews complete, initial blocked-demand register, early signal review | 6,250 ADA (25%) |
| M3 | Analysis and Draft Deliverables | 3 Aug — 4 Sep 20            | All classifications, full draft deliverable set, interim and draft reviews | 7,500 ADA (30%) |
| M4 | Final Deliverables and Publication | 7—11 Sep 2026 | Final report, final presentation, public summary published | 5,000 ADA (20%) |
| Total | | | | 25,000 ADA |

## Budget Summary

| Line Item | Purpose | ADA |
| :--- | :--- | :--- |
| Lead Researcher | Research design, interviews, analysis, deliverables | 10,000 |
| Research Coordinator | Respondent access, logistics, note-taking | 5,000 |
| Technical Advisor | Technical validation, milestone checkpoints | 4,000 |
| Research Operations | Provider access, negative-case outreach, tools, consent, communication | 4,000 |
| Contingency | Unforeseen access or tooling costs — returned if unused | 2,000 |
| Total | | 25,000 |

## Value for Money Argument

The total cost of 25,000 ADA represents approximately $5,500 to $6,500 USD for a 12-week, 30 to 44 respondent study producing 16 required deliverables. An equivalent engagement commissioned from an external research firm at mid-market blockchain consultant rates of $50 to $75 per hour would cost approximately $25,000 to $40,000 USD for the lead researcher role alone, with the full external market equivalent ranging from $35,000 to $55,000 USD or approximately 145,000 to 228,000 ADA at current rates.

NexTrium's proposal delivers the same scope at approximately 11 to 17 percent of the external market equivalent cost. The primary value drivers are: (1) existing documented evidence base eliminating preliminary research costs; (2) established community access eliminating outreach costs; (3) Samir Idris's technical review capacity at a rate 72 to 81 percent below open market equivalent for that calibre of expertise; (4) research operations budget explicitly covering provider access and negative-case outreach costs; (5) deliberately narrow scope producing higher-confidence findings.


# SECTION 11: CONFLICTS OF INTEREST DECLARATION

NexTrium Global Innovations Ltd makes the following declarations on behalf of all named team members in accordance with the requirements of RFP 07.

## **Abulbasit Adigun Abdulrahman — Lead Researcher**

Abulbasit is the founder and director of NexTrium Global Innovations Ltd and the lead contributor to Zivana Protocol. Zivana Protocol is referenced throughout this proposal as a primary evidence case and is the source of the baseline validation findings that form the research's starting evidence set. This constitutes a declared potential conflict of $interest$.

Management approach: In accordance with CPC guidance received during the submission process, all evidence derived from Zivana Protocol's validation work is treated as applicant-supplied conflict evidence throughout this research. It is clearly separated from independent evidence, will not by itself establish segment-level demand or value-flow classifications above low confidence, and its confidence level depends on documentation available, CPC inspectability, reproducibility, and triangulation with independent sources. All findings derived from Zivana's architecture will be distinguished from independent builder and operator evidence throughout the research and in all deliverables. Findings that do not support Cardano infrastructure investment, including findings that recommend reject, will be reported without filtering.

Abulbasit serves as Governance Research Lead at Prisma Protocol. This role does not create a financial interest in any infrastructure providers, bridge protocols, or interoperability pathways assessed in this research.

Abulbasit has contributed to the broader ecosystem as DEEP Fund Marketing Coordinator and Ecosystem Contributor to ASI Alliance. Neither role creates a financial interest in or governance position over any assessed entity.

Abulbasit is an active participant in Cardano Intersect. This participation does not create a governance position that would compromise independent research findings.

No financial exposure to bridge providers, interoperability protocols, partner-chain teams, wallet providers, or liquidity providers assessed in this research is declared at the time of submission.

## **Yuguda Muhammad — Research Coordinator**

No conflicts of interest are declared at the time of submission. Yuguda Muhammad does not hold governance, advisory, or financial positions in any Cardano ecosystem entity, bridge provider, interoperability protocol, or infrastructure team that would be assessed in this research.

## **Samir Idris — Technical Advisor**


Samir is a newly elected member of the Cardano Product Committee through the most recent Intersect election. His CPC membership means he serves on the body that commissions and evaluates this research. This constitutes a declared potential conflict of interest.

Management approach: Consistent with his published Intersect declaration, Samir does not hold any governance position that would compromise independent decision-making and will disclose any potential conflict and recuse himself where appropriate. Within this research, Samir's role is scoped exclusively to technical validation of specific findings in Milestones 1 and 3 and does not extend to research design, deliverable production, or recommendations to the CPC. His technical review outputs will be clearly attributed and distinguished from the lead researcher's analysis in all deliverables.

Samir has contributed to and shipped products with Minswap, FluidTokens, Metera, and Statera. None of these protocols are bridge providers, interoperability protocols, or infrastructure teams assessed in the value-flow or provider opportunity sections of this research. No financial exposure to any assessed provider or pathway is declared at the time of $of$ submission.

## Subcontracting

No subcontractors are engaged beyond the named team members above. If any subcontracting becomes necessary during the research, it will be disclosed to CPC immediately with full details of roles, responsibilities, costs, and any conflicts.

## General Declaration

No team member holds ownership or commercial interest in any bridge provider, interoperability protocol, partner chain, wallet provider, or liquidity provider that may be assessed in this research. No team member intends to apply for Cardano ecosystem funding directly connected to the findings of this research in a way that would create a material conflict with the research outputs. All declared conflicts are managed through the controls described above and will be disclosed immediately to the CPC if circumstances change during the research period.


# SECTION 12: ETHICS AND DATA HANDLING STATEMENT

This section consolidates the ethics and data handling approach for this research in accordance with the Submission Pack requirement for a standalone ethics and data handling statement.

## Research Ethics Approach

This research involves interviews with builders, operators, infrastructure providers, bridge providers, and other commercially active stakeholders. NexTrium applies the following baseline human-subject safeguards to every interview and survey interaction throughout the project. Before each interview, every respondent will be told the purpose of the research, who commissioned it, that the research is for, and how their input may be used. Respondents will be asked explicitly whether their comments are attributable by name, attributable by category only, or fully confidential. No respondent will be recorded without explicit verbal or written consent. Respondents will be given the opportunity to clarify or withdraw attribution status after the interview. NexTrium will not expose respondents to employment, commercial, security, regulatory, or competitive risk through the publication of findings.

## Informed Consent Protocol

Yuguda Muhammad will manage a consent tracking register throughout the project. Every respondent will be logged with their consent status before their interview. Consent status categories: Named attribution (consented to being identified by name and organisation), Anonymised attribution (consented to views being published but not attributed), Confidential (input used to inform analysis, not published in any identifiable form). No contact (declined to participate, will not be approached again). No interview will proceed without a documented consent status.

## Anonymisation Approach

Published outputs will use the minimum level of identification necessary to make findings useful. The Blocked-Demand Case Register will distinguish named, confidential, and anonymised cases explicitly. The Provider and Partner Opportunity Analysis will use category-level descriptions for providers who have not consented to named attribution. The public summary will not contain any information that could identify a confidential respondent through context, combination of details, or process of elimination.

## Data Storage and Security

All raw interview notes will be stored securely by Yuguda Muhammad in a password-protected environment accessible only to the research team. Raw notes will not be shared outside the research team without explicit respondent consent. Data will be retained for a minimum of two years following project completion to allow CPC inspection if required. After the two-year retention period, data will be deleted or anonymised unless CPC requests extended retention in writing.


## Confidentiality and Publication Boundaries
Research outputs will be produced in two tiers. The confidential tier covers the full research report and supporting deliverables, accessible to CPC and approved reviewers. The public tier will not contain confidential respondent identities, unreleased technical roadmap details, commercially sensitive provider information, security-sensitive bridge or infrastructure details, or confidential integration plans. If any finding cannot be published in any useful form due to confidentiality constraints, that limitation will be disclosed in the public summary with an explanation of why the finding is withheld.

## Proprietary and Paid Data Handling
No proprietary datasets are planned for this research. All primary data will be generated through interviews and desk research using publicly available sources. The research operations budget includes contingency for paid expert calls if bridge or provider outreach requires an intermediary introduction. If any proprietary, paid, or non-public data source becomes necessary, NexTrium will immediately disclose to CPC the source, access conditions, whether CPC can inspect the data, whether it can be cited publicly, what limitations apply, and whether it can be retained after project completion.

## Bias Controls and Research Integrity
The ethics and data handling approach operates in conjunction with the research integrity controls described in Section 9. NexTrium will not wait until the final report to disclose weak respondent access, unsupported demand claims, technical feasibility uncertainty, provider non-responsiveness, or evidence that conflicts with preliminary findings. Material issues will be disclosed at the earliest relevant CPC checkpoint as described in Section 8.


# SECTION 13: DELIVERABLES PLAN

This section provides a consolidated map of all required deliverables, their content requirements, acceptance criteria, milestone schedule, and confidentiality treatment. NexTrium will produce all deliverables as standalone documents unless combination is explicitly noted.

| :--- | :--- |
| **D1: L2 Barrier Analysis** | **Milestone: Draft M3, Final M4 \| Confidentiality: Summary public** |
| **Description** | Ranked analysis of what is blocking L2-dependent deployment on Cardano across the African informality economy builder population. |
| **Content Requirements** | Separates all nine blocker types: technical, commercial, ecosystem, liquidity, UX, tooling, coordination, compliance, and unknown. Each entry includes blocker description, affected use case, blocker type, severity, adoption impact, urgency, evidence source, confidence level, proposed owner or workstream, and recommended action from the full set including reject. Every blocker entry must include a relevance confirmation stating how the blocker directly ties to a specific L1 or interoperability workflow. Applicant-supplied conflicted evidence entries are clearly labelled and separated from independent evidence entries. |
| **Acceptance Criteria** | Separates technical, commercial, ecosystem, liquidity, UX, coordination, and unknown blockers. Includes evidence source, affected use case, severity, confidence level, and proposed owner. Does not treat all blockers as technical. Barriers with explained impact. |

| :--- | :--- |
| **D2: L2 Demand Map** | **Milestone: Draft M3, Final M4 \| Confidentiality: Summary public** |
| **Description** | Map of applications and use cases waiting on L2 or interoperability capability across the African informal economy builder population. |
| **Content Requirements** | Every entry includes all nine dimensions: application or use case category, blocked workflow, required L2 capability, deployment condition, expected adoption pathway, indicative scale range, timing assumptions, confidence level, and source basis. Scale estimates are indicative ranges with stated assumptions. |
| **Acceptance Criteria** | Includes all nine dimensions. Does not list speculative ideas or rely on self-reported demand only. Includes deployment condition and scale logic for every entry. |


| :--- | :--- |
| **D3: Interoperability Requirements Register** | **Milestone: Draft M3, Final M4 \| Confidentiality: Summary public** |
| **Description** | Ranked register of interoperability features requested by builders, operators, bridge providers, infrastructure teams, and other relevant stakeholders. |
| **Content Requirements** | Every entry includes all eight required dimensions: requested feature, user or operator type, chain or corridor or pathway, frequency, urgency, blocker status, adoption consequence, evidence source, and confidence level. Distinguishes must-have from nice-to-have. |
| **Acceptance Criteria** | Classifies by user or operator type, chain or corridor, frequency, urgency, blocker status, adoption consequence, evidence source, and confidence. |
| **D4: Interoperability Value-Flow Assessment** | **Milestone: Draft M3, Final M4 \| Confidentiality: Summary public** |
| **Description** | Classification of priority cross-chain pathways by Cardano-side value and dependency risk using the RFP framework. |
| **Content Requirements** | Every pathway classification states all six required elements: expected inflows (users, liquidity, applications, transactions, partner access), potential outflows, retention mechanism, dependency risk, evidence, and confidence. Uses five agreed categories. Bridge volume data used only where source, destination, and retention analysis accompanies it. All pathway classifications derived from NexTrium application validation work are labelled as applicant-supplied conflicted evidence and separated from independent evidence throughout. No applicant-supplied finding is used to establish a confidence level above low without independent triangulation. |
| **Acceptance Criteria** | Assesses all inflow and outflow dimensions. Does not treat every connection as positive. Does not ignore outflow risk. Includes source, destination, and retention logic. |
| **D5: Provider and Partner Opportunity Analysis** | **Milestone: Draft M3, Final M4 \| Confidentiality: Summary public** |


**Description:** Assessment of bridge, interoperability, partner-chain, wallet, and infrastructure providers relevant to Cardano's emerging market opportunity.
**Content Requirements:** Every provider entry includes all nine Appendix F dimensions: provider or partner type, current Cardano status, integration blocker, commercial incentive, technical effort, demand evidence, mutual benefit, risk, and recommended action. Supported by peer ecosystem benchmarking.
**Acceptance Criteria:** Includes all nine dimensions. Does not list providers without decision logic. Does not ignore why providers have not prioritised Cardano.

## D6: Blocked-Demand Case Register
**Milestone:** Milestone: Initial M2, Final M4 | Confidentiality: Summary public
**Description:** Documented cases where specific applications, workflows, or operators are waiting on L2 or interoperability capability.
**Content Requirements:** Minimum 8 to 15 documented cases. VAL-003 and VAL-006 serve as Cases 1 and 2 at low confidence as applicant-supplied conflicted evidence, upgradeable following Samir Idris technical review and independent builder triangulation. Each case distinguishes named, confidential, and anonymised evidence. Each case includes blocker, deployment decision pending, evidence source, and confidence level. Every case must pass the relevant L2 or interoperability workflow test confirming the blocker directly ties to a named L2 or interoperability use case.
**Acceptance Criteria:** Applicant-justified number of cases. Distinguishes named, confidential, and anonymised evidence. Includes blocker, deployment decision pending, source, and confidence. Does not use vague builders say claims.

## D7: Negative-Case and Non-Cardano Evidence Summary
**Milestone:** Milestone: Draft M3, Final M4 | Confidentiality: Summary public
**Description:** Evidence from stalled deployments, rejected integrations, competitor chain choices, and non-Cardano operator perspectives.
**Content Requirements:** Includes negative cases, non-Cardano comparisons, and stalled or rejected pathways. For each case, explains what Cardano should learn or avoid. Does not filter for positive outcomes.


| :--- | :--- |
| **Acceptance Criteria** | Includes negative cases, non-Cardano comparisons, or stalled pathways. Explains what Cardano should learn or avoid. Does not rely on positive Cardano cases. |
| **D8: Investment Sequencing Recommendation** | **Milestone: Draft M3, Final M4 \| Confidentiality: Summary public** |
| **Description** | Recommended order of L2 and interoperability actions converting research findings into funding and coordination decisions. |
| **Content Requirements** | Ranks all recommended actions by validated demand, impact, urgency, dependency, cost driver, owner or workstream, confidence, expected Cardano-side value, and action type. Uses full action set including reject. Framed as evidence-based sequencing recommendations, not roadmap prescriptions. |
| **Acceptance Criteria** | Ranks by all required dimensions. Does not produce broad recommendations without sequencing. Connects all actions to evidence and decision gates. |
| **D9: Evidence Threshold Framework** | **Milestone: Draft M3, Final M4 \| Confidentiality: Fully public** |
| **Description** | Reusable standard for assessing future L2 and interoperability grant, partnership, and roadmap proposals. |
| **Content Requirements** | Defines minimum evidence required across five dimensions for each proposal type: demand evidence, blocker severity, value-flow benefit, adoption pathway, and measurable outcomes. Scoped to L2 and interoperability proposals specifically. |
| **Acceptance Criteria** | Defines minimum evidence for demand, blocker severity, value-flow benefit, adoption pathway, and measurable outcomes. Helps reviewers distinguish strong from weak proposals. |
| **D10: Technical and Commercial Blocker Taxonomy** | **Milestone: Compiled progressively M1 through M3, Final M4 \| Confidentiality: Fully public** |
| **Description** | Reusable classification system for L2 and interoperability blockers ensuring findings are routed to the correct owner or workstream. |








## Content Requirements
Includes methodology overview, respondent category summary, high-level demand findings, high-level interoperability requirements, publishable value-flow themes, recommended investment sequencing where publishable, and limitations and evidence caveats. Excludes all confidential information.

## Acceptance Criteria
Includes methodology    overview, publishable findings, high-level recommendations, caveats, and confidentiality limits. Not too vague to be useful. Does not expose confidential details.

## Deliverables Summary Table

| No. | Deliverable | Milestone | Confidentiality |
| :--- | :--- | :--- | :--- |
| D1 | L2 Barrier Analysis | Draft M3, Final M4 | Summary public |
| D2 | L2 Demand Map | Draft M3, Final M4 | Summary public |
| D3 | Interoperability Requirements Register | Draft M3, Final M4 | Summary public |
| D4 | Interoperability Value-Flow Assessment | Draft M3, Final M4 | Summary public |
| D5 | Provider and Partner Opportunity Analysis | Draft M3, Final M4 | Summary public |
| D6 | Blocked-Demand Case Register | Initial M2, Final M4 | Summary public |
| D7 | Negative-Case and Non-Cardano Evidence Summary | Draft M3, Final M4 | Summary public |
| D8 | Investment Sequencing Recommendation | Draft M3, Final M4 | Summary public |
| D9 | Evidence Threshold Framework | Draft M3, Final M4 | Fully public |
| D10 | Technical and Commercial Blocker Taxonomy | Progressive M1-M3, Final M4 | Fully public |
| D11 | Research Methodology Appendix | Progressive M1-M3, Final M4 | Summary public |
| D12 | Cross-RFP Handoff Memo | Progressive M2-M3, Final M4 | Fully public |
| D13 | Executive Decision Memo | Draft M3, Final M4 | Summary public |
| D14 | Final Research Report | Draft M3, Final M4 | Confidential |
| D15 | Final Presentation | M4 — 8 Sep 2026 | Confidential |
| D16 | Public Summary | M4 — post-CPC approval | Fully public |








| :--- | :--- |
| **S5: Expanded Technical Feasibility Review** | **Price: 2,000 ADA** |
| **Description** | Extension of Samir Idris's technical review scope beyond the core commitment of VAL-003 and VAL-006 findings to cover a broader set of infrastructure provider claims identified during primary research, including technical feasibility review of up to five additional provider or pathway claims. |
| **Decision Value** | Lifts the confidence level of additional provider-side findings from medium to high where external technical validation is possible. Particularly valuable if the screening phase identifies technically complex bridge corridor or partner-chain candidates whose claims require independent technical scrutiny. |
| **Additional Deliverable** | Extended Technical Review Notes integrated into the Research Methodology Appendix and referenced in the relevant deliverables. |
| **S6: Public Workshop or Ecosystem Briefing** | **Price: 1,500 ADA** |
| **Description** | One structured public session presenting the research findings to the African Cardano builder community following final CPC approval of the public summary. Hosted online and open to builders, operators, and community members across the African ecosystem. |
| **Decision Value** | Extends the reach of research findings beyond the CPC to the builder community most likely to act on them. Creates a direct feedback loop between the research outputs and the population the research was designed to serve. |
| **Additional Deliverable** | Public Workshop Recording and Summary Note published alongside the Public Summary. |
| **S7: Reusable Annual Refresh Model** | **Price: 3,000 ADA** |


**Description**
A lightweight methodology and template package enabling the CPC or a future research vendor to conduct an annual refresh of the L2 and interoperability demand and value-flow assessment without commissioning a full research engagement from scratch. Includes a streamlined interview guide, updated screening criteria checklist, value-flow reclassification template, evidence confidence update protocol, and changelog format.

**Decision Value**
The only stretch item that creates compounding value beyond this research cycle. Consistent with the CPC's Strategy 2030 orientation, an annual refresh model ensures that demand map, barrier analysis, and value-flow classifications remain current as Cardano's infrastructure evolves. Reduces the cost of future research cycles.

**Additional Deliverable**
Annual Refresh Methodology and Template Package as a standalone document delivered alongside the Final Research Report.

## Stretch Scope Summary

| Item | Description | ADA |
| :--- | :--- | ---: |
| S1 | Deeper peer ecosystem benchmarking | 3,000 |
| S2 | Deeper bridge corridor and partner-chain analysis | 2,500 |
| S3 | Additional non-Cardano and negative-case interviews | 2,000 |
| S4 | Wallet and UX dependency assessment | 2,500 |
| S5 | Expanded technical feasibility review | 2,000 |
| S6 | Public workshop or ecosystem briefing | 1,500 |
| S7 | Reusable annual refresh model | 3,000 |
| Total optional stretch | | 16,500 |

All stretch items are optional additions commissioned entirely at CPC discretion. The core research commitment of 25,000 ADA and sixteen required deliverables remain fixed and unconditional regardless of which stretch items, if any, are selected. If all stretch items are commissioned, the total project budget would be 41,500 ADA, representing approximately 11.1 percent of the total RFP portfolio budget of 373,000 ADA.
