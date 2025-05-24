document.addEventListener('DOMContentLoaded', () => {
    const questionHeader = document.getElementById('question-header');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackDiv = document.getElementById('feedback');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const questionArea = document.getElementById('question-area');
    const resultsArea = document.getElementById('results-area');
    const finalScoreSpan = document.getElementById('final-score');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const restartBtn = document.getElementById('restart-btn');
    const answerReviewDiv = document.getElementById('answer-review');

    // ALL YOUR QUIZ QUESTIONS GO HERE
    // Format: question, options (A, B, C), correctAnswer (A, B, or C), explanation
    const quizQuestions = [
        {
            question: "A valuation of a firm based on the current market price of its assets - liabilities is referred to as the firm's:",
            options: {
                A: "operating value.",
                B: "liquidation value.",
                C: "going-concern value."
            },
            correctAnswer: "B",
            explanation: "The liquidation value is based on the assumption that the firm will cease to operate and all of its assets will be sold to repay liabilities."
        },
        {
            question: "Which of the following two ratios are likely to be used for determining value as a function of company peer benchmarks?",
            options: {
                A: "Price-to-earnings and price-to-book.",
                B: "Price-to-sales and debt/equity.",
                C: "Return on equity and net profit margin."
            },
            correctAnswer: "A",
            explanation: "Relative valuation looks at market-based ratios of comparable companies in the industry. Price-to-sales, price-to-book, price-to-earnings, and price-to-cash flow are examples of ratios used in relative valuation analysis."
        },
        {
            question: "One justification for using multiple models to estimate firm value is:",
            options: {
                A: "the ability to streamline and economize the development process through repeated use of the same generic baseline.",
                B: "the ability to learn from each successive model and to make improvements.",
                C: "the ability to examine differences in estimated values can reveal how a model's assumptions and the perspective of the analysis are affecting the estimated values."
            },
            correctAnswer: "C",
            explanation: "Using multiple models and examining differences in estimated values can reveal how a model's assumptions and the perspective of the analysis are affecting the estimated values."
        },
        {
            question: "Important considerations for choosing an appropriate approach for valuing a given company are least likely to include:",
            options: {
                A: "Is the model appropriate based on the quality and availability of input data?",
                B: "Is the model consistent with the investor's IPS?",
                C: "Is the model suitable given the purpose of the analysis?"
            },
            correctAnswer: "B",
            explanation: "Important considerations when choosing a valuation model include: Does the model fit the characteristics of the company? Is the model suitable given the purpose of the analysis? Is the model appropriate based on the quality and availability of input data?"
        },
        {
            question: "The value of a conglomerate derived using a sum-of-the-parts valuation would least accurately be called the:",
            options: {
                A: "liquidation value.",
                B: "breakup value.",
                C: "private market value."
            },
            correctAnswer: "A",
            explanation: "Sum-of-the-parts valuation totals the estimated values of each of the company's business divisions as independent going concerns. The value derived using a sum-of-the-parts valuation is also sometimes called the private market value or the breakup value, even when such a restructuring is not necessarily expected."
        },
        {
            question: "A valuation of a firm based on the assumption that the firm will continue to operate is referred to as its:",
            options: {
                A: "operating value.",
                B: "going-concern value.",
                C: "status quo value."
            },
            correctAnswer: "B",
            explanation: "The going-concern value is based on the assumption that the firm will continue to operate and the firm's value is the present value of its future dividends."
        },
        {
            question: "Financial Analyst Davey Jarvis, CFA, is evaluating Laura's Chocolates, Inc., which processes nut-based toffee for world-wide distribution. Which of the following steps is Jarvis most likely to take as part of the top-down valuation process?",
            options: {
                A: "Evaluate price performance on an ongoing basis.",
                B: "Learn / understand the business.",
                C: "Perform momentum-based technical analysis."
            },
            correctAnswer: "B",
            explanation: "The valuation process consists of 5 steps: 1. Understanding the business. 2. Forecasting company performance. 3. Selecting a valuation model. 4. Complete the valuation. 5. Decision making."
        },
        {
            question: "How can we account for different valuations for the same firm from several analysts even if they use the same required returns?",
            options: {
                A: "Valuations are based on the analyst's expectations.",
                B: "The analysts may be biased with personal opinions about management.",
                C: "Valuation models contain random errors."
            },
            correctAnswer: "A",
            explanation: "Valuation is based on expectations of future cash flows rather than known values. Each analyst will build expectations of cash flows from the fundamental data and from other factors, internal and external, that the analyst believes will affect the firm's performance."
        },
        {
            question: "An analyst performing an asset valuation to detect investor's expectations about the future value of the variables that affect a stock's price is most likely using the valuation for:",
            options: {
                A: "generating a fairness opinion.",
                B: "reading the market.",
                C: "projecting the value of corporate actions."
            },
            correctAnswer: "B",
            explanation: "Asset valuation has many uses including stock selection, reading the market, projecting the value of corporate actions, issuing fairness opinions, and valuing private businesses. Reading the market entails detecting investor's expectations about the future value of the variables that affect a stock's price."
        },
        {
            question: "Which of the following least accurately represents one of the primary steps of the equity valuation process described by Pinto, Henry, Robinson, and Stowe?",
            options: {
                A: "Selecting a valuation model.",
                B: "Decision making.",
                C: "Assessing corporate governance."
            },
            correctAnswer: "C",
            explanation: "The valuation process described by Pinto, Henry, Robinson, and Stowe consists of 5 steps: 1. Understanding the business. 2. Forecasting company performance. 3. Selecting a valuation model. 4. Complete a valuation. 5. Decision making. Corporate governance is important, but is not one of the primary steps."
        },
        {
            question: "Notes to financial statements contain:",
            options: {
                A: "discussion of the firm's accounting practices and basis of presentation.",
                B: "a description of the firm's financial condition and future prospects.",
                C: "important information about the firm's accounting practices and basis of presentation."
            },
            correctAnswer: "C",
            explanation: "A number of important disclosures regarding a firm's accounting practices and the basis on which income and expense are recognized are contained in the footnotes to the financial statements. An overview by management of the company's past, present, and future can be found in the Management discussion and analysis (MD&A) section of a financial statement."
        },
        {
            question: "The goal of asset valuation, based on the expected future cash flows of an asset, is to establish an asset's:",
            options: {
                A: "relative value.",
                B: "intrinsic value.",
                C: "market value."
            },
            correctAnswer: "B",
            explanation: "Asset valuation based on the expected future cash flows is utilized to estimate an asset's intrinsic value, or the value derived from the asset's investment characteristics."
        },
        {
            question: "What are three factors that would make a firm's accounting earnings less of a gauge of future economic performance? Late filings, unusually:",
            options: {
                A: "high amounts of loans to company insiders, and short tenure of senior management.",
                B: "low amounts of loans to company insiders, and short tenure of senior management.",
                C: "high amounts of loans to company insiders, and long tenure of senior management."
            },
            correctAnswer: "A",
            explanation: "Quality of earnings looks at the relationship between accounting earnings and economic profit potential of the firm. An analyst is concerned about anything that would render accounting earnings less useful as a gauge of the firm's future expected economic earnings. Warning signals include late filings, unusually high amounts of loans to company insiders, and short tenure of senior management."
        },
        {
            question: "Which of the following is NOT a use of asset valuation?",
            options: {
                A: "Issuing fairness opinions.",
                B: "Projecting the value of corporate actions.",
                C: "Estimating inflation rates."
            },
            correctAnswer: "C",
            explanation: "Asset valuation has many uses including stock selection, reading the market, projecting the value of corporate actions, issuing fairness opinions, and valuing private businesses. Asset valuation is not used to project inflation rates."
        },
        {
            question: "A valuation of a firm based on the comparison of the firm with the market value of other firms is known as a:",
            options: {
                A: "relative valuation.",
                B: "comparison valuation.",
                C: "peer group valuation."
            },
            correctAnswer: "A",
            explanation: "A relative valuation is a valuation based on comparing the firm to other firms with similar characteristics. Market multiples are commonly used as the basis of relative valuations."
        },
        {
            question: "A comparison between a firm's going-concern valuation and its liquidation value will show that the going-concern value will always be:",
            options: {
                A: "equal to the present value of the expected continued operation of the firm.",
                B: "greater than the liquidation value.",
                C: "less than the liquidation value."
            },
            correctAnswer: "A",
            explanation: "It is not possible to state the relationship between the going-concern value and the liquidation value without examining the prospects for the firm and the current value of the assets. The going-concern value is equal to the present value of the expected dividends arising from continued operation."
        },
        {
            question: "Valuation models for equities contain estimates of required returns and:",
            options: {
                A: "expected future cash flows.",
                B: "an assumed continuation of past cash flows.",
                C: "known future cash flows."
            },
            correctAnswer: "A",
            explanation: "Valuation models used for equities require the analyst to estimate the required return applicable to the investment and to develop an expectation of future cash flows. While cash flows for fixed-income investments are stated, no such definition is available for equities."
        },
        {
            question: "Which of the following is least likely a use of equity valuation?",
            options: {
                A: "Projecting the value of corporate actions.",
                B: "Assessing corporate governance.",
                C: "Issuing fairness opinions."
            },
            correctAnswer: "B",
            explanation: "Equity valuation has many uses including stock selection, reading the market, projecting the value of corporate actions, issuing fairness opinions, and valuing private businesses. Equity valuation is not specifically related to corporate governance."
        },
        {
            question: "Consider the steps in the top down valuation approach as it is applicable for Gold Star. Dentice should forecast the growth of:",
            options: {
                A: "each firm in the oil industry, the growth rate of the oil industry, and the growth rate of the economy.",
                B: "Gold Star, the growth of the oil industry, and then the growth of the overall economy.",
                C: "the overall economy, growth of the industry, and the growth rate of Gold Star."
            },
            correctAnswer: "C",
            explanation: "The top down model for valuation would begin with analysis of the overall economy and the expectation of the growth rate in the economy. Further, the impact of the expected growth rate of the economy on the oil industry needs to be ascertained. The second component is the analysis of the oil industry in which Gold Star operates. That involves the determination of the competitive forces in the industry and the future threats and opportunities faced by the industry. It also determines the variables that determine the future profitability of the entire oil industry. The analyst then forms future expectations of these variables given the expectations about the overall economy. The expectations of variables determining the growth and profitability of the oil industry are then used to determine the expectations of the overall growth of Gold Star. In the company analysis, the analyst reviews the quality of earnings, financial ratios, management and intangibles to ascertain the growth prospects for the company. The analyst then selects an appropriate model to value the company. Assumptions used in the valuation must be clearly spelled out and updated to reflect new information."
        },
        {
            question: "Which of the following models would be most suitable to value Gold Star?",
            options: {
                A: "Absolute valuation.",
                B: "Relative valuation.",
                C: "Liquidation value."
            },
            correctAnswer: "A",
            explanation: "Absolute valuation models or intrinsic value models such as the dividend growth rate model and the free cash flow model value a company independent of peer valuation. The valuation is based on the present value of cash-flows for the specific company. Relative valuation models such as P/E ratio compare the earnings multiple to that of similar companies to make a judgment about the valuation. If the P/E ratio is higher than peer company P/E ratio, it is said to be overvalued. Conversely, if the P/E ratio is lower than peer company P/E ratio, it is said to be undervalued. Caution should be taken to make sure that peer companies are indeed comparable. For the valuation of Gold Star, absolute valuation would be suitable since it is closely held and hence market valuation is not available."
        },
        {
            question: "Which discounts must be taken into account while valuing the investment opportunity? Joe should take into account the:",
            options: {
                A: "marketability, liquidity, and minority discounts in the valuation.",
                B: "marketability, liquidity, and majority discounts in the valuation.",
                C: "marketability, liquidity, and control premium in the valuation."
            },
            correctAnswer: "A",
            explanation: "Since Gold Star is closely held, the investment is not easily marketable. Closely linked is the fact that the investment cannot be easily liquidated and the cost of selling the investment needs to be discounted from the value. Finally, since only 5% of the stock is being invested in, the control of the operations of the company still remains with the majority shareholders. This lack of control needs to be quantified and discounted from Gold Star's valuation."
        },
        {
            question: "Why is the introductory paragraph in Article One incorrect?",
            options: {
                A: "Most analysts believe that at some point intrinsic and market value will converge.",
                B: "The harder intrinsic value is to estimate the greater the potential divergence of market and intrinsic value.",
                C: "Markets cannot be constantly informationally efficient as this would mean that intrinsic and market price would always be identical."
            },
            correctAnswer: "B",
            explanation: "Intrinsic value is the valuation of an asset by someone who has a perfect understanding of the asset or the firm. Intrinsic value is therefore the theoretical value the stock would take if it were perfectly valued and stock price contained all relevant information. The harder it is to establish the intrinsic value the bigger the potential divergence between market price and intrinsic value."
        },
        {
            question: "Using Heller's suggestion of an analyst intrinsic value which is $1.20 too high in the illustrative example for Article One, calculate the valuation error and the actual mispricing: Valuation error Actual mispricing",
            options: {
                A: "$1.20 $0.15",
                B: "$1.35 $0.15",
                C: "$0.15 $1.20"
            },
            correctAnswer: "A", // Assuming this is the correct calc based on the PDF explanation
            explanation: "Valuation error = IVanalyst – IVactual = 1.20. Actual mispricing = IVactual – price = (25.20 – 1.20) – 23.85 = 0.15"
        },
        {
            question: "In response to Heller's point regarding the Linpan discussion in Article Two, which of the following correctly identifies the suggested valuation method?",
            options: {
                A: "Going Concern Valuation.",
                B: "Liquidation Value.",
                C: "Orderly Liquidation Value."
            },
            correctAnswer: "C",
            explanation: "The proceeds raised by selling assets over a longer period of time are likely to be larger than those raised in a rapid forced 'fire sale.' Hence, the term Orderly Liquidation Value is often used to differentiate from a forced liquidation value."
        },
        {
            question: "In the Toys to You Inc. (TTY) discussion in Article Two, which of the following would be the most appropriate conclusion for the writer to add?",
            options: {
                A: "TTY is attempting a strategy of product differentiation by committing to high quality products but appears to be failing as revenues are lower than its competitors.",
                B: "TTY is attempting a strategy of cost leadership by keeping prices equal to or lower than its competitors but appears to be failing as margins are lower than its competitor’s.",
                C: "TTY is attempting a strategy of cost leadership by producing with the lowest cost base but appears to be failing as margins are lower than its competitor’s."
            },
            correctAnswer: "C",
            explanation: "Product differentiation involves adding product features or services that increase the attractiveness of the firm's product. There is no suggestion that TTY is attempting to do this. Cost leadership is a bid to produce at the lowest cost, a strategy that is evident from the chairperson's statement. However, it has resulted in a margin of only 13.9% compared to the competitor's 15.4%."
        },
        {
            question: "Which of the following would not be an example of one of Michael Porter's 5 competitive forces applicable to Toys to You?",
            options: {
                A: "A new chain of toy stores, Games & Goodies, has opened up in key Toys to You territories.",
                B: "Toys to You’s biggest supplier have ‘due to unforeseen market conditions’ added a 15% premium to key product lines.",
                C: "Due to cash flow issues Toys to You have been forced to halve the marketing and advertising budget compared to the previous financial year."
            },
            correctAnswer: "C",
            explanation: "Porter's Five Forces include risk of new entrants (A), supplier power (B), customer power, established rivals, and the risk of substitute offerings. Marketing and advertising budgetary constraints are not relevant."
        },
        {
            question: "For an analyst valuing public equities, the relevant concept of value is most likely to be:",
            options: {
                A: "fair market value.",
                B: "orderly liquidation value.",
                C: "intrinsic value."
            },
            correctAnswer: "C",
            explanation: "For an analyst valuing public equities, the most relevant definition of value is generally intrinsic value. A value based on a going-concern assumption, rather than a liquidation assumption, is the appropriate choice for a company that will continue to produce and sell goods. Fair market value is the most relevant definition of value to use in an agreement between the owners of a private business regarding the price at which the owners can sell their ownership interest."
        },
        {
            question: "An ownership perspective can be important for an analyst determining the value of a share position. A controlling interest suggests the most appropriate model is a:",
            options: {
                A: "cash flow model.",
                B: "dividend discount model.",
                C: "time series model."
            },
            correctAnswer: "A",
            explanation: "A controlling interest suggests a cash flow model may be most appropriate since the controlling interest would allow the purchaser to set dividend policy."
        },
        {
            question: "Disclosures of accounting practices and basis are most likely to be made in which part of a firm's financial reports?",
            options: {
                A: "Management's discussion and analysis (MD&A).",
                B: "Footnotes.",
                C: "The audit report."
            },
            correctAnswer: "B",
            explanation: "A number of important disclosures regarding a firm's accounting practices and the basis on which income and expense are recognized are contained in the footnotes to the financial statements."
        },
        {
            question: "When an analyst scrutinizes a firm's financial statements to try to discern how accurately the reported information reflects economic reality, and to evaluate the sustainability of the company's performance, the process is most likely to be referred to as a:",
            options: {
                A: "comprehensive basis of accounting analysis.",
                B: "reasonable assurance analysis.",
                C: "quality of earnings analysis."
            },
            correctAnswer: "C",
            explanation: "The accuracy and level of detail disclosed in financial reports is referred to as the quality of earnings. When we say 'quality of earnings analysis' we are generally referring to scrutinizing all a firm's financial statements (including the balance sheet) to try to determine not only the sustainability of the companies' performance but also how accurately the financial statements reflect economic reality."
        },
        {
            question: "An analyst is most likely to review the footnotes to a firm's financial statements to find information about the firm's:",
            options: {
                A: "accounting practices.",
                B: "operation.",
                C: "cash flow activities."
            },
            correctAnswer: "A",
            explanation: "A number of important disclosures regarding a firm's accounting practices and the basis on which income and expense are recognized are contained in the footnotes to the financial statements. The profit and loss statement provides information on the operation of the firm. The statement of cash flows is the best source of data on a company's cash flow activities such as operating, investing and financing."
        },
        {
            question: "A valuation of a firm based on the intrinsic value of the firm's investment characteristics is known as an:",
            options: {
                A: "absolution valuation.",
                B: "absolute valuation.",
                C: "asset based valuation."
            },
            correctAnswer: "B",
            explanation: "An absolute valuation approach attempts to determine the value of the firm based on its specific characteristics without regard to the market prices of other firms."
        },
        {
            question: "A valuation of a firm based on a review of other firms' price to earnings, price to sales, and price to return on investment ratios is an example of a:",
            options: {
                A: "relative valuation.",
                B: "broad-based valuation.",
                C: "fundamental valuation."
            },
            correctAnswer: "A",
            explanation: "An approach using market multiples to establish the value of the subject firm in relation to similar firms is an example of a relative valuation approach."
        },
        {
            question: "Which of the following would cause an analyst to have concern about a firm's quality of earnings?",
            options: {
                A: "A firm books sales when orders are shipped.",
                B: "The firm took a write off for a recently impaired asset.",
                C: "The gain on the sale of a plant was included in operating earnings."
            },
            correctAnswer: "C",
            explanation: "The inclusion of gains from the sale of assets as operating income would cause the analyst to question the quality of the firm's earnings."
        },
        {
            question: "Overestimating the growth rate of a firm in using a valuation model would result in a value that is likely to be:",
            options: {
                A: "can't tell from this information.",
                B: "too high.",
                C: "too low."
            },
            correctAnswer: "B",
            explanation: "Using an estimate for a firm's growth rate that is too high would overstate the amount of future returns, resulting in a present value that is too high."
        },
        {
            question: "The present value of expected future cash flows is the firm's:",
            options: {
                A: "terminal value.",
                B: "liquidation value.",
                C: "going-concern value."
            },
            correctAnswer: "C",
            explanation: "Going-concern value is the present worth of expected future cash flows generated by a business."
        },
        {
            question: "Liquidation value is the:",
            options: {
                A: "cash generated by terminating a business, selling its assets, and repaying liabilities.",
                B: "market value of the total assets less the market value of the total liabilities.",
                C: "present value of future cash flow less the possible liquidation cost."
            },
            correctAnswer: "A",
            explanation: "Liquidation value is the cash generated by terminating a business, selling all of its assets, and repaying liabilities."
        },
        {
            question: "Minority shareholders often do not have control of the price at which the firm will be sold or merged with another firm. In order to safeguard their interests, minority shareholders will often seek an analyst's opinion of the value of the firm. This opinion is referred to as a:",
            options: {
                A: "second opinion.",
                B: "fairness opinion.",
                C: "minority opinion."
            },
            correctAnswer: "B",
            explanation: "Minority shareholders are often dependent upon an analyst's opinion about the fairness of a price to be received. Hence the term fairness opinion."
        },
        {
            question: "A wise analyst will examine a valuation to determine:",
            options: {
                A: "ways to enhance a client's valuation.",
                B: "how well it will be received by the firm's management.",
                C: "its sensitivity to changes in expectations."
            },
            correctAnswer: "C",
            explanation: "The results of valuation models can be very sensitive to changes in the expectations incorporated in the model. Analysis of a valuation's sensitivity to the expectations and a review of the confidence the analyst has in the expectations may lead to the use of a valuation range rather than a pin-point value."
        }
        // ... add the rest of your 39 questions here
    ];

    let currentQuestionIndex = 0;
    let userAnswers = new Array(quizQuestions.length).fill(null); // To store user's selected answer for each question

    function loadQuiz() {
        const savedProgress = localStorage.getItem('quizProgress');
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            currentQuestionIndex = progress.currentQuestionIndex;
            userAnswers = progress.userAnswers;
            // Optionally, you could restore score if you calculated it on the fly,
            // but it's safer to recalculate it at the end.
        }
        displayQuestion();
        updateNavigationButtons();
    }

    function displayQuestion() {
        if (currentQuestionIndex < quizQuestions.length) {
            const q = quizQuestions[currentQuestionIndex];
            questionHeader.textContent = `Question #${currentQuestionIndex + 1} of ${quizQuestions.length}`;
            questionText.textContent = q.question;
            optionsContainer.innerHTML = ''; // Clear previous options
            feedbackDiv.style.display = 'none'; // Hide feedback when new question loads

            for (const key in q.options) {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = 'currentQuestion';
                input.value = key;
                input.checked = (userAnswers[currentQuestionIndex] === key); // Check if previously answered

                label.appendChild(input);
                label.appendChild(document.createElement('span')).textContent = ` ${key}) ${q.options[key]}`; // Use a span for text
                optionsContainer.appendChild(label);
            }
            updateNavigationButtons();
        } else {
            // Should not happen if navigation buttons are correctly managed
            // This case means quiz is theoretically finished but not submitted
            showResults();
        }
    }

    function updateNavigationButtons() {
        prevBtn.style.display = (currentQuestionIndex > 0) ? 'inline-block' : 'none';
        nextBtn.style.display = (currentQuestionIndex < quizQuestions.length - 1) ? 'inline-block' : 'none';
        submitQuizBtn.style.display = (currentQuestionIndex === quizQuestions.length - 1) ? 'inline-block' : 'none';

        // Disable options and show feedback if question was answered before
        const selectedOption = userAnswers[currentQuestionIndex];
        if (selectedOption !== null) {
            const q = quizQuestions[currentQuestionIndex];
            const correct = (selectedOption === q.correctAnswer);
            showFeedback(correct, q.explanation, q.correctAnswer);
            // Disable all radio buttons
            optionsContainer.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = true);
        } else {
             // Enable all radio buttons for new/unanswered questions
            optionsContainer.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = false);
            feedbackDiv.style.display = 'none'; // Ensure feedback is hidden for new questions
        }
    }

    function saveProgress() {
        const progress = {
            currentQuestionIndex: currentQuestionIndex,
            userAnswers: userAnswers
        };
        localStorage.setItem('quizProgress', JSON.stringify(progress));
    }

    function showFeedback(isCorrect, explanation, correctAnswer) {
        feedbackDiv.style.display = 'block';
        feedbackDiv.className = ''; // Clear previous classes
        if (isCorrect) {
            feedbackDiv.classList.add('correct');
            feedbackDiv.innerHTML = `Correct! <br> ${explanation}`;
        } else {
            feedbackDiv.classList.add('incorrect');
            feedbackDiv.innerHTML = `Incorrect. The correct answer was <strong>${correctAnswer}</strong>. <br> ${explanation}`;
        }
    }

    // Event Listeners
    nextBtn.addEventListener('click', () => {
        const selectedOption = document.querySelector('input[name="currentQuestion"]:checked');
        if (selectedOption) {
            userAnswers[currentQuestionIndex] = selectedOption.value; // Save selected answer
            saveProgress();
            currentQuestionIndex++;
            displayQuestion();
        } else {
            // If no option selected, show a temporary message or prevent moving
            feedbackDiv.style.display = 'block';
            feedbackDiv.className = '';
            feedbackDiv.innerHTML = '<span style="color: orange; font-weight: bold;">Please select an answer before proceeding.</span>';
        }
    });

    prevBtn.addEventListener('click', () => {
        currentQuestionIndex--;
        displayQuestion();
    });

    submitQuizBtn.addEventListener('click', () => {
        const selectedOption = document.querySelector('input[name="currentQuestion"]:checked');
        if (selectedOption || userAnswers[currentQuestionIndex] !== null) { // Allow submission even if last question wasn't re-answered, as long as it was once.
            userAnswers[currentQuestionIndex] = selectedOption ? selectedOption.value : userAnswers[currentQuestionIndex]; // Ensure last answer is saved
            saveProgress(); // Final save before showing results
            showResults();
        } else {
            feedbackDiv.style.display = 'block';
            feedbackDiv.className = '';
            feedbackDiv.innerHTML = '<span style="color: orange; font-weight: bold;">Please select an answer for the last question before submitting.</span>';
        }
    });

    restartBtn.addEventListener('click', () => {
        localStorage.removeItem('quizProgress');
        currentQuestionIndex = 0;
        userAnswers = new Array(quizQuestions.length).fill(null);
        questionArea.style.display = 'block';
        resultsArea.style.display = 'none';
        loadQuiz();
    });

    // Handle answer selection (to show immediate feedback if user re-selects on a past question)
    optionsContainer.addEventListener('change', (event) => {
        if (event.target.type === 'radio' && userAnswers[currentQuestionIndex] !== null) {
            // If user re-selects on a question they've already answered
            const selectedOption = event.target.value;
            const q = quizQuestions[currentQuestionIndex];
            const correct = (selectedOption === q.correctAnswer);
            showFeedback(correct, q.explanation, q.correctAnswer);
        }
    });


    function calculateScore() {
        let correctCount = 0;
        for (let i = 0; i < quizQuestions.length; i++) {
            if (userAnswers[i] === quizQuestions[i].correctAnswer) {
                correctCount++;
            }
        }
        return correctCount;
    }

    function showResults() {
        questionArea.style.display = 'none';
        resultsArea.style.display = 'block';

        const finalScore = calculateScore();
        finalScoreSpan.textContent = finalScore;
        totalQuestionsSpan.textContent = quizQuestions.length;

        answerReviewDiv.innerHTML = ''; // Clear previous review
        quizQuestions.forEach((q, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('answer-review-item');

            const qText = document.createElement('p');
            qText.classList.add('question-text-review');
            qText.textContent = `Question ${index + 1}: ${q.question}`;
            reviewItem.appendChild(qText);

            const userAnswer = userAnswers[index];
            const correctAnswer = q.correctAnswer;
            const isCorrect = (userAnswer === correctAnswer);

            const userAnswerP = document.createElement('p');
            userAnswerP.classList.add('user-answer-review');
            if (userAnswer) {
                 userAnswerP.textContent = `Your Answer: ${userAnswer}) ${q.options[userAnswer]} ${isCorrect ? '(Correct)' : '(Incorrect)'}`;
                 userAnswerP.style.color = isCorrect ? '#28a745' : '#dc3545'; // Green for correct, Red for incorrect
            } else {
                 userAnswerP.textContent = `Your Answer: Not answered`;
                 userAnswerP.style.color = '#ffc107'; // Yellow/orange for not answered
            }
            reviewItem.appendChild(userAnswerP);


            if (!isCorrect || !userAnswer) { // Only show correct answer if user was wrong or didn't answer
                const correctAnswerP = document.createElement('p');
                correctAnswerP.classList.add('correct-answer-review');
                correctAnswerP.textContent = `Correct Answer: ${correctAnswer}) ${q.options[correctAnswer]}`;
                reviewItem.appendChild(correctAnswerP);
            }


            const explanationP = document.createElement('p');
            explanationP.classList.add('explanation-review');
            explanationP.textContent = `Explanation: ${q.explanation}`;
            reviewItem.appendChild(explanationP);

            answerReviewDiv.appendChild(reviewItem);
        });
    }

    // Initial load of the quiz
    loadQuiz();
});
