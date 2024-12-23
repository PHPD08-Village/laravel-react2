<?php

// @formatter:off
// phpcs:ignoreFile
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $data
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Data newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Data newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Data query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Data whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Data whereData($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Data whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Data whereUpdatedAt($value)
 */
	class Data extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $message
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Message newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Message newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Message query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Message whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Message whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Message whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Message whereUpdatedAt($value)
 */
	class Message extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id 自動遞增id
 * @property string $title
 * @property string $contact_name
 * @property string $budget
 * @property string $location
 * @property string $completion_time
 * @property string $phone
 * @property string $email
 * @property string $details
 * @property string $require_code
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish whereBudget($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish whereCompletionTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish whereContactName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish whereDetails($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish whereRequireCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Publish whereUpdatedAt($value)
 */
	class Publish extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $rid
 * @property int|null $uid
 * @property string $averating
 * @property int $count
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Star newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Star newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Star query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Star whereAverating($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Star whereCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Star whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Star whereRid($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Star whereUid($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Star whereUpdatedAt($value)
 */
	class Star extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string|null $profile_picture
 * @property string|null $username
 * @property string|null $nickname
 * @property string|null $company_name
 * @property string|null $job_title
 * @property string|null $location
 * @property string|null $contact_phone
 * @property bool $phone_verified
 * @property string $email
 * @property bool $email_verified
 * @property string|null $line_id
 * @property string $login_status
 * @property bool $job_status
 * @property int|null $rating
 * @property string|null $preferred_location
 * @property string|null $job_category
 * @property string|null $accumulated_experience
 * @property string|null $job_experience
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereAccumulatedExperience($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereCompanyName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereContactPhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereEmailVerified($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereJobCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereJobExperience($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereJobStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereJobTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereLineId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereLoginStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereNickname($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo wherePhoneVerified($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo wherePreferredLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereProfilePicture($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereRating($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserInfo whereUsername($value)
 */
	class UserInfo extends \Eloquent {}
}

