from django.db import models

from core.models import DatesModel, UUIDModel


class Course(UUIDModel, DatesModel):
    class Meta:
        db_table = "course"
        verbose_name = "Course"
        verbose_name_plural = "Courses"

    name = models.CharField(max_length=200, null=False, blank=False)
    
    def __str__(self) -> str:
        return f"{self.name}"
