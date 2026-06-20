def calculate_ats_score(match_percentage, missing_skills):

    score = match_percentage

    score -= len(missing_skills) * 3

    score = max(0, min(100, score))

    return round(score)