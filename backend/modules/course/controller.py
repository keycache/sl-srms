from typing import Iterable

from rest_framework.exceptions import ValidationError

from core.controller import BaseController

from .models import Course


class CourseController(BaseController):
    def add_course(*args, **kwargs) -> Course:
        try:
            return Course.objects.create(**kwargs)
        except Exception as e:
            raise ValidationError(
                detail={"message": "Failed to add the course", "error": e.args}
            )

    def get_courses(*args, **kwargs) -> Iterable[Course]:
        return Course.objects.all()


course_controller = CourseController()
