from rest_framework import serializers
from api.models import Pqr

class PqrSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pqr
        fields = (
            "identification",
            "type_identification",
            "names_customer",
            "last_names_customer",
            "mobile_phone",
            "mobile",
            "email",
            "title",
            "description",
            "status",
            "created_at",
        )
