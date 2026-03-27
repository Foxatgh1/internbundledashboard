export const glossaryTerms = [
  // Valuation Concepts
  {
    term: "Pre-Money Valuation",
    definition: "The valuation of a company before it receives external funding in a given investment round. If a company has a $10M pre-money valuation and raises $2M, the post-money valuation is $12M. Investors use pre-money valuation to determine how much equity they receive for their investment.",
    category: "Valuation"
  },
  {
    term: "Post-Money Valuation",
    definition: "The valuation of a company after it has received external funding. Calculated as pre-money valuation plus the investment amount. Determines the percentage ownership an investor receives: investor ownership % = investment amount / post-money valuation.",
    category: "Valuation"
  },
  {
    term: "Down Round",
    definition: "A financing round in which a company raises capital at a lower valuation than its previous round. Signals investor concern about company performance or changed market conditions. Down rounds are dilutive and can trigger anti-dilution protections for earlier investors.",
    category: "Valuation"
  },
  {
    term: "409A Valuation",
    definition: "An independent appraisal of a private company's common stock fair market value, required by the IRS under Section 409A of the tax code. Used to set employee stock option strike prices. Typically much lower than the preferred stock price paid by investors.",
    category: "Valuation"
  },
  {
    term: "Step-Up",
    definition: "The increase in valuation between funding rounds. A 2x step-up from a $10M Series A to a $20M Series B is considered healthy. Large step-ups can indicate strong growth; they also set a high bar for future rounds.",
    category: "Valuation"
  },

  // Deal Terms
  {
    term: "SAFE",
    definition: "Simple Agreement for Future Equity — a financing instrument invented by Y Combinator. A SAFE gives an investor the right to receive equity in a future priced round. Unlike convertible notes, SAFEs have no interest rate or maturity date, making them simpler for early-stage deals. Key parameters: valuation cap, discount rate.",
    category: "Deal Terms"
  },
  {
    term: "Convertible Note",
    definition: "A short-term debt instrument that converts into equity at a future financing round, typically at a discount. Unlike SAFEs, convertible notes carry an interest rate (typically 5–8%) and a maturity date. At conversion, the investor gets shares at a discount to the new round price, or at the valuation cap — whichever yields more shares.",
    category: "Deal Terms"
  },
  {
    term: "Term Sheet",
    definition: "A non-binding document outlining the key financial and legal terms of a proposed investment. Covers valuation, investment amount, equity stake, board composition, and protective provisions. Forms the basis for final legal documents. Typically binding only on exclusivity and confidentiality clauses.",
    category: "Deal Terms"
  },
  {
    term: "Liquidation Preference",
    definition: "A contractual right that gives investors priority over common stockholders in receiving proceeds during a liquidity event (acquisition, IPO, dissolution). A 1x non-participating preference means investors get their money back first; a participating preference lets them also share in remaining proceeds pro rata with common stockholders.",
    category: "Deal Terms"
  },
  {
    term: "Anti-Dilution Protection",
    definition: "Provisions protecting investors from dilution if the company raises a down round. Two main types: (1) Full ratchet — adjusts investor price to new lower price; (2) Broad-based weighted average — adjusts price based on weighted average of old and new shares, which is more founder-friendly.",
    category: "Deal Terms"
  },
  {
    term: "Pro-Rata Rights",
    definition: "The right for an existing investor to participate in future funding rounds to maintain their ownership percentage. Also called preemptive rights or follow-on rights. Highly valued by VCs as it lets them double down on winning investments without being diluted.",
    category: "Deal Terms"
  },
  {
    term: "Drag-Along Rights",
    definition: "Rights allowing a majority of shareholders to force minority shareholders to join in a sale of the company. Prevents minority shareholders from blocking an acquisition. Protects investors by ensuring they can exit even if founders or small shareholders object.",
    category: "Deal Terms"
  },
  {
    term: "Tag-Along Rights",
    definition: "Also called co-sale rights. Allow minority shareholders to join in a sale if a majority shareholder is selling shares. Protects minority investors from being left behind when a founder or major investor exits. Typically triggered when founders sell a significant block of shares.",
    category: "Deal Terms"
  },
  {
    term: "Valuation Cap",
    definition: "A maximum valuation at which a convertible instrument (SAFE or note) will convert into equity. Rewards early investors by guaranteeing they convert at no higher than the cap, even if the company raises at a higher valuation. A lower cap is better for investors; a higher cap is better for founders.",
    category: "Deal Terms"
  },
  {
    term: "Discount Rate",
    definition: "In convertible notes and SAFEs, the percentage discount investors receive off the price per share of the next qualified financing round. A 20% discount means the investor pays 80 cents for every dollar of equity, rewarding early risk-taking.",
    category: "Deal Terms"
  },
  {
    term: "Board Seat",
    definition: "A position on a company's board of directors, often negotiated as part of investment terms. VCs frequently require a board seat to protect their investment and provide governance oversight. Boards typically consist of founders, investor representatives, and independent directors.",
    category: "Deal Terms"
  },
  {
    term: "Protective Provisions",
    definition: "Veto rights that allow preferred stockholders to block certain company actions without their approval. Commonly include: raising more capital, selling the company, changing capital structure, paying dividends, and changing preferred stockholder rights.",
    category: "Deal Terms"
  },

  // Fund Mechanics
  {
    term: "LP (Limited Partner)",
    definition: "Investors who commit capital to a venture fund. LPs are passive — they don't make investment decisions. Common LPs include university endowments, pension funds, family offices, sovereign wealth funds, and high-net-worth individuals. LPs receive 80% of fund profits after fees.",
    category: "Fund Mechanics"
  },
  {
    term: "GP (General Partner)",
    definition: "The fund managers who operate the venture fund, make investment decisions, and are responsible for fund performance. GPs commit their own capital (typically 1–2% of fund size) as 'skin in the game.' GPs receive a management fee and carried interest.",
    category: "Fund Mechanics"
  },
  {
    term: "Carried Interest",
    definition: "The share of profits earned by a VC fund's general partners, typically 20% of fund profits above the hurdle rate. Also called 'carry.' Aligns GP incentives with LP returns. Long-term capital gains treatment means carry is often taxed at lower rates than ordinary income.",
    category: "Fund Mechanics"
  },
  {
    term: "Management Fee",
    definition: "An annual fee paid by LPs to fund managers to cover operating expenses. Typically 2% of committed capital during the investment period, stepping down in later years. On a $100M fund, this equals $2M/year for salaries, rent, travel, and operations.",
    category: "Fund Mechanics"
  },
  {
    term: "Vintage Year",
    definition: "The year in which a fund makes its first investment or closes on commitments. Used to benchmark fund performance against peers raised in the same market environment. Vintage year matters because market conditions at time of investment significantly affect returns.",
    category: "Fund Mechanics"
  },
  {
    term: "Fund Life",
    definition: "The duration of a venture fund, typically 10 years with possible 1–2 year extensions. Divided into an investment period (first 3–5 years) and a harvesting period. LPs cannot withdraw capital during fund life; they must wait for distributions from exits.",
    category: "Fund Mechanics"
  },
  {
    term: "DPI (Distributed to Paid-In)",
    definition: "A measure of cash returns distributed to LPs relative to their invested capital. DPI = total distributions / total capital invested. A DPI of 1.0x means LPs have gotten their money back; above 1.0x means profit. The only 'real' return metric since it reflects actual cash.",
    category: "Fund Mechanics"
  },
  {
    term: "TVPI (Total Value to Paid-In)",
    definition: "Total value of a fund (distributions + residual value) relative to invested capital. TVPI = (distributions + NAV) / paid-in capital. Includes unrealized value, making it useful for measuring early-stage funds but less reliable than DPI since paper gains may not materialize.",
    category: "Fund Mechanics"
  },
  {
    term: "RVPI (Residual Value to Paid-In)",
    definition: "The current value of unrealized investments relative to paid-in capital. RVPI = NAV / paid-in capital. Together with DPI, RVPI makes up TVPI. High RVPI indicates potential future returns but also uncertainty. RVPI goes to zero as a fund fully exits positions.",
    category: "Fund Mechanics"
  },
  {
    term: "Capital Call",
    definition: "A notice from a GP to LPs to contribute a portion of their committed capital for a new investment or fund expense. LPs commit capital upfront but don't hand it over all at once — GPs draw it down as needed. Failing to meet a capital call can result in severe penalties.",
    category: "Fund Mechanics"
  },
  {
    term: "Hurdle Rate",
    definition: "The minimum return a fund must achieve before the GP can collect carried interest. Typically 8% annual return. Protects LPs by ensuring GPs only profit above a baseline performance threshold. Also called 'preferred return.'",
    category: "Fund Mechanics"
  },

  // Cap Table Concepts
  {
    term: "Cap Table",
    definition: "Capitalization table — a spreadsheet showing the ownership structure of a company, listing all shareholders, their equity stakes, and the types of equity they hold (common stock, preferred stock, options, warrants). Essential for fundraising, exit modeling, and equity grants.",
    category: "Cap Table"
  },
  {
    term: "Dilution",
    definition: "The reduction in existing shareholders' ownership percentage when new shares are issued. Happens at every funding round and when options are granted. Economic dilution can be offset if the new capital increases the company's value — a 10% dilution at 3x higher valuation still improves dollar value of holdings.",
    category: "Cap Table"
  },
  {
    term: "Option Pool",
    definition: "A block of shares reserved for current and future employee equity grants (stock options or RSUs). Typically 10–20% of fully diluted shares. Investors usually require an option pool be created (or topped up) before a new round, which dilutes founders pre-investment.",
    category: "Cap Table"
  },
  {
    term: "Fully Diluted Shares",
    definition: "Total shares outstanding plus all potential shares from options, warrants, convertible instruments, and other rights. Used to calculate ownership percentages on a fully diluted basis — the most conservative and accurate view of ownership. Always use fully diluted when analyzing cap tables.",
    category: "Cap Table"
  },
  {
    term: "Authorized Shares",
    definition: "The maximum number of shares a company is legally permitted to issue, as stated in its certificate of incorporation. Companies typically authorize many more shares than they issue, leaving room for future fundraising and option grants without requiring shareholder approval each time.",
    category: "Cap Table"
  },
  {
    term: "Vesting",
    definition: "The process by which an employee earns their equity over time. Standard startup vesting: 4-year schedule, 1-year cliff. Ensures employees must stay and contribute to earn their equity. If an employee leaves before fully vested, unvested shares return to the option pool.",
    category: "Cap Table"
  },
  {
    term: "Cliff",
    definition: "The initial period before any equity vests. Standard: 1-year cliff on a 4-year vest. An employee leaving before the cliff gets nothing; hitting the cliff grants 25% of total shares at once. Protects the company from issuing equity to short-tenured employees.",
    category: "Cap Table"
  },
  {
    term: "Strike Price",
    definition: "The price at which an option holder can purchase shares. Set at fair market value (409A valuation) on the grant date. If a company's stock rises above the strike price, options have intrinsic value — the holder can buy shares cheap and sell (or hold) at a profit.",
    category: "Cap Table"
  },
  {
    term: "Pari Passu",
    definition: "Latin for 'equal step.' Describes securities that share equal priority in a liquidation or distribution. When multiple investor classes are pari passu, they receive proceeds proportionally rather than in seniority order.",
    category: "Cap Table"
  },

  // Exit Concepts
  {
    term: "IPO (Initial Public Offering)",
    definition: "A company's first sale of stock to the public on a stock exchange. Provides liquidity for founders, early employees, and investors. Requires significant regulatory compliance (SEC filings, Sarbanes-Oxley) and typically involves an 18–24 month preparation process. Post-IPO lockup: typically 180 days.",
    category: "Exit"
  },
  {
    term: "M&A (Mergers & Acquisitions)",
    definition: "The acquisition of one company by another. The most common exit path for VC-backed startups. Acquirers pay cash, stock, or a combination. Deal structure heavily affects actual founder and investor returns — acqui-hires and asset purchases often yield little to investors.",
    category: "Exit"
  },
  {
    term: "Secondary Sale",
    definition: "A transaction where existing shares in a private company are sold directly to new buyers, rather than through a company-issued financing round. Allows early shareholders to achieve partial liquidity before an IPO. Common sources: secondary market platforms, direct purchases by new investors.",
    category: "Exit"
  },
  {
    term: "Acqui-hire",
    definition: "An acquisition primarily motivated by the talent of the target company's team, not the business or technology itself. The acquirer effectively 'buys' the team by acquiring the company. Often yields minimal returns for investors as deal value is structured around retention packages for employees.",
    category: "Exit"
  },
  {
    term: "MOIC (Multiple on Invested Capital)",
    definition: "The ratio of the value returned to investors versus the capital they invested. MOIC = total value / invested capital. A 3x MOIC means an investor tripled their money. Doesn't account for time, so a 3x over 2 years is much better than a 3x over 10 years.",
    category: "Exit"
  },
  {
    term: "IRR (Internal Rate of Return)",
    definition: "The annualized rate of return on an investment, accounting for the time value of money. Unlike MOIC, IRR factors in when cash flows occur. A 3x MOIC in 2 years ≈ 73% IRR; in 10 years ≈ 12% IRR. Top-quartile VC funds typically target 20–30%+ net IRR.",
    category: "Exit"
  },
  {
    term: "Lockup Period",
    definition: "A post-IPO restriction preventing insiders (founders, employees, investors) from selling shares, typically 90–180 days. Prevents a flood of selling immediately after listing that would depress share price. Expiration of lockup periods can cause significant stock volatility.",
    category: "Exit"
  },
  {
    term: "SPAC (Special Purpose Acquisition Company)",
    definition: "A blank-check company formed specifically to acquire a private company and take it public. An alternative to traditional IPOs. The SPAC raises money via IPO, then has 18–24 months to identify and merge with a target. Gained popularity 2020–2021, then largely fell out of favor.",
    category: "Exit"
  },

  // Valuation (additional)
  {
    term: "Unicorn",
    definition: "A privately held startup valued at $1 billion or more. The term was coined by Aileen Lee in 2013 to highlight the rarity of such companies. There are now hundreds of unicorns globally, making the term less exclusive than originally intended.",
    category: "Valuation"
  },
  {
    term: "Decacorn",
    definition: "A privately held startup valued at $10 billion or more. An extension of the unicorn terminology for companies that achieve extremely high private market valuations before going public.",
    category: "Valuation"
  },

  // Deal Terms (additional)
  {
    term: "Syndicate",
    definition: "A group of investors who co-invest together in a startup, typically led by a lead investor who coordinates terms and due diligence. Common on platforms like AngelList, where a syndicate lead brings in backers to join deals they source.",
    category: "Deal Terms"
  },
  {
    term: "Lead Investor",
    definition: "The primary investor in a funding round who sets the terms, leads due diligence, and often takes a board seat. Other investors follow the lead's terms. The lead is responsible for managing the deal process from term sheet to close.",
    category: "Deal Terms"
  },
  {
    term: "Bridge Financing",
    definition: "Short-term funding used to 'bridge' a company to its next major financing round or milestone. Often structured as convertible notes. Used when a company needs capital but isn't ready — or the market isn't right — for a full priced round.",
    category: "Deal Terms"
  },
  {
    term: "Due Diligence",
    definition: "The investigative process investors undertake before closing an investment. Covers financial records, legal documents, cap table, customer references, technology review, and competitive analysis. Thoroughness varies by stage — seed deals close faster than Series B+.",
    category: "Deal Terms"
  },
  {
    term: "Mezzanine Financing",
    definition: "A hybrid of debt and equity financing, often used at late stages before an IPO. Mezzanine debt is subordinated to senior debt but sits above equity in the capital structure. Usually includes warrants or conversion features to compensate lenders for higher risk.",
    category: "Deal Terms"
  },
  {
    term: "Recapitalization",
    definition: "A restructuring of a company's capital structure — the mix of debt and equity. Can involve paying a special dividend, issuing new debt, or exchanging one class of equity for another. Sometimes done to provide liquidity to shareholders without a full exit.",
    category: "Deal Terms"
  },
  {
    term: "Tranche",
    definition: "A portion of a larger investment that is released incrementally, often tied to the achievement of specific milestones. Tranched funding reduces risk for investors but creates execution pressure for founders who must hit targets to unlock capital.",
    category: "Deal Terms"
  },
  {
    term: "Side Letter",
    definition: "A private agreement between a fund and an individual LP or investor that grants special terms not available to others. Common provisions include MFN (most favored nation) clauses, co-investment rights, fee discounts, and enhanced reporting requirements.",
    category: "Deal Terms"
  },

  // Fund Mechanics (additional)
  {
    term: "Deal Flow",
    definition: "The volume and quality of investment opportunities a VC firm sees. Strong deal flow — especially proprietary deals before they're widely shopped — is a key competitive advantage. Top-tier firms see thousands of pitches per year but invest in only a handful.",
    category: "Fund Mechanics"
  },
  {
    term: "Scout",
    definition: "An individual — often a founder or operator — paid by a VC firm to source investment opportunities. Scouts receive a small check to deploy into deals they find, plus a share of carried interest. The model expands a firm's network and geographic reach.",
    category: "Fund Mechanics"
  },
  {
    term: "Angel Investor",
    definition: "A high-net-worth individual who invests their own capital into early-stage startups, often before institutional investors enter. Angels typically write smaller checks ($10K–$500K) and may offer mentorship and introductions alongside capital.",
    category: "Fund Mechanics"
  },
  {
    term: "Portfolio Company",
    definition: "A company in which a venture fund has made an investment. Funds actively support their portfolio through strategic advice, hiring help, and introductions. Portfolio construction — number and stage of companies — is central to a fund's strategy.",
    category: "Fund Mechanics"
  },
  {
    term: "Follow-on Investment",
    definition: "Additional capital invested by an existing investor into a company in a subsequent funding round. Allows investors to maintain or increase ownership as the company grows. Pro-rata rights give investors the contractual ability to participate in future rounds.",
    category: "Fund Mechanics"
  },
  {
    term: "Crossover Investor",
    definition: "A public market investor — typically a hedge fund or mutual fund — that also participates in private company funding rounds, usually at late stages. Examples include Tiger Global, Coatue, and T. Rowe Price. They bridge private and public market investing.",
    category: "Fund Mechanics"
  },
  {
    term: "Growth Equity",
    definition: "A type of private investment in relatively mature companies looking to expand, enter new markets, or fund significant acquisitions. Sits between venture capital (earlier stage) and buyout (control-oriented). Growth equity investors typically take minority stakes without requiring a change of control.",
    category: "Fund Mechanics"
  },
  {
    term: "SPV (Special Purpose Vehicle)",
    definition: "A legal entity created for a single investment, allowing multiple investors to co-invest in one company as a single line on the cap table. Common on AngelList. SPVs simplify cap table management for founders while enabling smaller investors to pool capital into a deal.",
    category: "Fund Mechanics"
  },
  {
    term: "Anchor LP",
    definition: "A large, high-profile limited partner who makes a significant commitment to a fund early in fundraising, providing credibility and helping attract other LPs. Anchor LPs often receive preferential economics — lower fees or carry — in exchange for their early commitment.",
    category: "Fund Mechanics"
  },
  {
    term: "Clawback",
    definition: "A provision requiring GPs to return previously paid carried interest to LPs if later fund losses reduce overall returns below the hurdle rate. Protects LPs from overpaying carry on early wins that are subsequently offset by write-downs or losses.",
    category: "Fund Mechanics"
  },
  {
    term: "NAV (Net Asset Value)",
    definition: "The current fair market value of a fund's assets minus its liabilities. Represents the fund's total value at a given point in time. Used to calculate LP stakes and assess unrealized performance. Private fund NAV relies on mark-to-market valuations of portfolio companies.",
    category: "Fund Mechanics"
  },

  // Cap Table (additional)
  {
    term: "QSBS (Qualified Small Business Stock)",
    definition: "A provision under Section 1202 of the IRS tax code that allows investors and employees to exclude up to 100% of capital gains (up to $10M or 10x their basis) from federal taxes on the sale of stock in a qualified small business. To qualify, the company must be a domestic C-corp with gross assets under $50M at the time of issuance, and the stock must be held for at least 5 years. A major tax incentive for early-stage startup investing.",
    category: "Cap Table"
  },
  {
    term: "Warrant",
    definition: "A security giving the holder the right to purchase shares at a set price (the exercise price) before a specified expiration date. Similar to a stock option but typically issued to investors or lenders rather than employees. Warrants dilute existing shareholders when exercised.",
    category: "Cap Table"
  },

  // Startup Ecosystem
  {
    term: "Runway",
    definition: "The amount of time a company can operate before running out of cash, based on its current burn rate. Runway (months) = cash on hand / monthly net burn. Startups typically aim for 18–24 months of runway after each fundraise to allow time to hit the next milestone.",
    category: "Startup Ecosystem"
  },
  {
    term: "Burn Rate",
    definition: "The rate at which a company spends its cash reserves. Gross burn = total monthly expenses; net burn = gross burn minus revenue. A key metric for investors assessing financial health and for founders managing runway and fundraising timing.",
    category: "Startup Ecosystem"
  },
  {
    term: "Traction",
    definition: "Evidence that a product or business model is working, typically demonstrated through user growth, revenue, retention, or engagement metrics. Investors use traction to validate product-market fit and reduce perceived risk. More traction generally means better fundraising terms.",
    category: "Startup Ecosystem"
  },
  {
    term: "Pitch Deck",
    definition: "A presentation used by founders to communicate their business to potential investors. Typically 10–15 slides covering problem, solution, market size, business model, traction, team, and the fundraising ask. Often the first artifact a VC sees before agreeing to a meeting.",
    category: "Startup Ecosystem"
  },
  {
    term: "Incubator",
    definition: "An organization that supports early-stage startups by providing workspace, mentorship, and sometimes seed capital over an extended, flexible period. Unlike accelerators, incubators typically have no fixed program timeline or graduation event and cater to very early ideas.",
    category: "Startup Ecosystem"
  },
  {
    term: "Accelerator",
    definition: "A fixed-term, cohort-based program that provides startups with mentorship, resources, and seed funding in exchange for a small equity stake. Programs typically run 3–4 months and culminate in a Demo Day. Notable accelerators include Y Combinator and Techstars.",
    category: "Startup Ecosystem"
  },
  {
    term: "Demo Day",
    definition: "The culminating event of an accelerator program where cohort startups pitch to an audience of investors, press, and the broader startup community. Designed to maximize investor exposure and create fundraising momentum for graduates immediately following the program.",
    category: "Startup Ecosystem"
  },

  // Fund Mechanics (additional)
  {
    term: "SBA (Small Business Administration)",
    definition: "A U.S. government agency that supports small businesses through loan guarantees, grants, and investment programs. The SBA does not typically invest directly but enables capital formation through programs like the SBIC program. Relevant to investors who manage or co-invest alongside SBIC-licensed funds.",
    category: "Fund Mechanics"
  },
  {
    term: "SBIC (Small Business Investment Company)",
    definition: "A privately owned and managed investment fund licensed by the SBA to provide debt and equity capital to small U.S. businesses. SBICs receive leverage from the SBA — typically $2 for every $1 of private capital raised — making them a cost-effective structure for early and growth-stage investing. Some VC firms operate SBICs alongside their main funds.",
    category: "Fund Mechanics"
  },
  {
    term: "AGM (Annual General Meeting)",
    definition: "A yearly meeting between a fund's general partners and its limited partners. GPs use the AGM to present portfolio performance, fund metrics (DPI, TVPI, IRR), notable exits or write-downs, and the investment pipeline. LPs use AGMs to ask questions and maintain oversight of the fund. Standard practice for institutional VC funds.",
    category: "Fund Mechanics"
  },

  // Startup Ecosystem (additional)
  {
    term: "Cash Conversion Cycle",
    definition: "A metric measuring the number of days it takes a company to convert investments in inventory and other resources into cash from sales. CCC = Days Inventory Outstanding + Days Sales Outstanding − Days Payable Outstanding. A shorter or negative CCC (common in SaaS and subscription businesses) indicates strong working capital efficiency and is viewed favorably by investors.",
    category: "Startup Ecosystem"
  },

  // Tools & Platforms
  {
    term: "Affinity",
    definition: "A relationship intelligence CRM built for deal-driven teams like VC firms. Affinity automatically logs emails, meetings, and introductions to map a firm's network and track relationships with founders, LPs, and co-investors. At Pelion, Affinity is used to manage deal pipeline, track outreach, and surface warm paths to companies of interest.",
    category: "Tools & Platforms"
  },
  {
    term: "Harmonic",
    definition: "A startup intelligence platform that aggregates data on private companies — including funding history, headcount growth, job postings, and web traffic signals — to help investors identify emerging companies early. At Pelion, Harmonic is used to source deals, monitor portfolio signals, and research companies before outreach.",
    category: "Tools & Platforms"
  },
  {
    term: "Carta",
    definition: "A cap table management and equity administration platform used by startups, law firms, and investors. Carta allows companies to issue and track equity, run 409A valuations, and model dilution scenarios. Investors use Carta to view portfolio holdings and receive fund reporting. At Pelion, Carta is used to manage equity positions across the portfolio.",
    category: "Tools & Platforms"
  },
]

export const categories = [...new Set(glossaryTerms.map(t => t.category))]
