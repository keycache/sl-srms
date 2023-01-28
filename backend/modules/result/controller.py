from typing import Iterable

from rest_framework.exceptions import ValidationError

from core.controller import BaseController

from .models import Result


class ResultController(BaseController):
    def add_result(*args, **kwargs) -> Result:
        try:
            return Result.objects.create(**kwargs)
        except Exception as e:
            raise ValidationError(
                detail={"message": "Failed to add the Result", "error": e.args}
            )

    def get_results(*args, **kwargs) -> Iterable[Result]:
        return Result.objects.all()


result_controller = ResultController()
