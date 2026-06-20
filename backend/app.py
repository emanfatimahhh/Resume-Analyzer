from flask import Flask, request, jsonify
from flask_cors import CORS
from PyPDF2 import PdfReader
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from ai_suggestions import get_ai_suggestions
import re

app = Flask(__name__)
CORS(app)

COMMON_SKILLS = [
    "python",
    "java",
    "javascript",
    "react",
    "node",
    "html",
    "css",
    "sql",
    "mongodb",
    "flask",
    "django",
    "git",
    "docker",
    "aws",
    "machine learning",
    "data structures",
    "algorithms",
    "c++"
]


def extract_text_from_pdf(pdf_file):
    text = ""

    reader = PdfReader(pdf_file)

    for page in reader.pages:
        page_text = page.extract_text()

        if page_text:
            text += page_text

    return text.lower()


def calculate_similarity(resume_text, jd_text):
    documents = [resume_text, jd_text]

    cv = CountVectorizer()
    matrix = cv.fit_transform(documents)

    similarity = cosine_similarity(matrix)[0][1]

    return round(similarity * 100, 2)


def extract_skills(text):
    found = []

    for skill in COMMON_SKILLS:
        if skill.lower() in text.lower():
            found.append(skill)

    return found


@app.route("/analyze", methods=["POST"])
def analyze_resume():

    resume = request.files["resume"]
    job_description = request.form["job_description"]

    resume_text = extract_text_from_pdf(resume)

    match_percentage = calculate_similarity(
        resume_text,
        job_description.lower()
    )

    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(job_description)

    missing_skills = list(
        set(jd_skills) - set(resume_skills)
    )

    suggestions = []

    if match_percentage < 60:
        suggestions.append(
            "Add more keywords from the job description."
        )

    if missing_skills:
        suggestions.append(
            "Consider adding these skills if you possess them."
        )

    return jsonify({
        "match_percentage": match_percentage,
        "resume_skills": resume_skills,
        "job_skills": jd_skills,
        "missing_skills": missing_skills,
        "suggestions": suggestions
    })


if __name__ == "__main__":
    app.run(debug=True)