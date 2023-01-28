from django.db import models

from core.models import DatesModel, UUIDModel
from modules.course.models import Course
from modules.student.models import Student

class Scores(models.TextChoices):
    A = 'A', 'A'
    B = 'B', 'B'
    C = 'C', 'C'
    D = 'D', 'D'
    E = 'E', 'E'
    F = 'F', 'F'
    
class Result(UUIDModel, DatesModel):
    class Meta:
        db_table = "result"
        verbose_name = "Result"
        verbose_name_plural = "Results"

    student = models.ForeignKey(Student, null=False, blank=False, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, null=False, blank=False, on_delete=models.CASCADE)
    score = models.CharField(max_length=2, choices=Scores.choices, blank=False, null=False)

    def __str__(self) -> str:
        return f"{self.student} || {self.course} || {self.score}"
