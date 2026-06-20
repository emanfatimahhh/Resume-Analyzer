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

def extract_skills(text):
    found = []

    for skill in COMMON_SKILLS:
        if skill.lower() in text.lower():
            found.append(skill)

    return found