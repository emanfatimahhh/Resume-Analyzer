import google.generativeai as genai

genai.configure(
    api_key="YOUR_GEMINI_API_KEY"
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

def get_ai_suggestions(
    resume_text,
    job_description
):

    prompt = f"""
    Resume:
    {resume_text}

    Job Description:
    {job_description}

    Analyze this resume.

    Return:
    - strengths
    - weaknesses
    - missing keywords
    - ATS improvements

    Maximum 5 bullet points.
    """

    response = model.generate_content(
        prompt
    )
    ai_feedback = get_ai_suggestions(
    resume_text,
    job_description
)

    return response.text