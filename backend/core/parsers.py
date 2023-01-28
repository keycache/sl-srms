import humps
from rest_framework.parsers import JSONParser


class CaseParser(JSONParser):
    media_type = "application/json"

    def parse(self, stream, media_type=None, parser_context=None):
        data = super().parse(stream, media_type, parser_context)
        data = humps.decamelize(data)
        return data
