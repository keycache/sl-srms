from django.db import models

from core.models import UUIDModel

class Student(UUIDModel):
    class Meta:
        db_table = "student"
        verbose_name = "Student"
        verbose_name_plural = "Students"

    first_name = models.CharField(max_length=100, null=False, blank=False)
    last_name = models.CharField(max_length=100, null=False, blank=False)
    date_of_birth = models.DateField()

    def __str__(self) -> str:
        return f"{self.first_name} / {self.last_name} / {self.date_of_birth}"